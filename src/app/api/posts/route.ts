  //import data from "../../posts/data";
  import clientPromise from "../../../lib/mongodb";
  import { Post, Posts, Users } from "@/types/interfaces";
  import { z } from "zod";
  import { Db } from "mongodb";

  // zod schema for the post
  const postSchema = z.object({
    userId: z.string(),
    title: z.string().min(5),
    description: z.string().min(10),
    content: z.string().min(10),
    createdAt: z.string().optional(),
    likes: z.number().optional(),
    author:z.object({
      name:z.string(),
      src:z.string()
    })
  });
  let client;
  let db: Db;
  let posts: Posts | any;

/// api to get all posts
  export async function GET(req: Request) {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') as string );
    const perPage = parseInt(url.searchParams.get('limit') as string);
    try {
      client = await clientPromise;
      db = client.db("echodb");
      
      const postsCollection = db.collection("posts");
      const itemCount = await db.collection("posts").countDocuments({})
      const posts = await postsCollection.find({}).skip(perPage * ( page - 1 )).limit(perPage).toArray();
      if (!posts) {
        throw new Error("No Posts Found");
      }
      
      return Response.json({posts:posts , count:itemCount});

    } catch (error: any) {
      return Response.json({ error: "Internal Server Error" });
    } finally {
    }
  }
//################ api to add a post ############

    export async function POST(req: Request) {
    // const session = await getServerSession( authOptions);
    
      try {
        // connect to the database
        client = await clientPromise;
        db = client.db("echodb");
        posts = db.collection("posts");
        
      const data = await req.json();
    
      const parsedData = postSchema.safeParse(data);
      if (!parsedData.success) {
        throw new Error("Invalid Data");
      }
        await posts.insertOne(parsedData.data );
        //return Response
        return Response.json({ message: "Post Added Successfully" });
      } catch (error: any) {
        return Response.json({ error: error.message });
      } finally {
      }
    }

