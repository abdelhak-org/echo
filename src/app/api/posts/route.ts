//import data from "../../posts/data";
import clientPromise from "../../../lib/mongodb";
import { Post, Posts, Users } from "@/types/interfaces";
import { z } from "zod";
import { Db } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// zod schema for the post
const postSchema = z.object({
  userId: z.string(),
  title: z.string().min(5),
  description: z.string().min(10),
  content: z.string().min(10),
  createdAt: z.string().optional(),
  likes: z.number().optional(),
  dislikes: z.number().optional(),
});
let client;
let db: Db;
let posts: Posts | any;

/// api to get all posts
export async function GET(_req: Request) {
//  const session = await getServerSession( authOptions);

  try {
    client = await clientPromise;
    db = client.db("echodb");
    const postsCollection = db.collection("posts");
    const posts = await postsCollection.find().toArray();

    if (!posts) {
      throw new Error("No Posts Found");
    }

    return Response.json({ posts });
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
   console.log("parsedData ==>",parsedData)
   if (!parsedData.success) {
     throw new Error("Invalid Data");
   }
   console.log("parsed data #####" , parsedData.data)
    await posts.insertOne(parsedData.data );
    //return Response
    return Response.json({ message: "Post Added Successfully" });
  } catch (error: any) {
    return Response.json({ error: error.message });
  } finally {
  }
}
