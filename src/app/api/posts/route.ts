//import data from "../../posts/data";
import clientPromise from "../../../lib/mongodb";
import { Post , Posts } from "@/types/interfaces";
import {z} from "zod";
import { Db } from "mongodb";
// zod schema for the post
const postSchema = z.object({ 
    title: z.string(),
    description : z.string(),
    content: z.string() , 
    createdAt : z.string().optional(),
    likes : z.number().optional(),
    dislikes : z.number().optional(),
    });
    let client ;
    let db: Db;
    let posts: Posts | any    ;
    
/// api to get all posts
export async function GET(_req: Request,) {
    try {
        client = await clientPromise;
        db =  client.db("echodb");
        const  postsCollection  =   db.collection("posts");
        const  posts = await postsCollection.find().toArray();
        
        if(!posts){ 

            throw new Error("No Posts Found");
        }   

        return Response.json({posts});
    } catch (error: any) {
        return Response.json({ error: "Internal Server Error" });
    } finally {
    }
}
// api to add a post
export async function POST(req: Request) {
    try {
    
        // connect to the database
        client = await clientPromise;
        db =  client.db("echodb");
        posts =   db.collection("posts");
        
        // get the data from the request
        const data = await  req.json();
        // validate the data
        const parsedData = postSchema.safeParse(data);
        if (!parsedData.success) {
        throw new Error("Invalid Data");
        }
        // insert the data into the database
        await posts.insertOne(parsedData.data);
        //return Response
        return Response.json({ message: "Post Added Successfully" });
    } catch (error:any) {
        return Response.json( {error :error.message })
    } finally {
    }
}
