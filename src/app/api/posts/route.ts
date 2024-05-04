//import data from "../../posts/data";
import clientPromise from "../../../lib/mongodb";
import { Post , Posts } from "@/types/interfaces";
import {z} from "zod";
const postSchema = z.object({ 
    title: z.string(),
    description : z.string(),
    content: z.string() , 
    createdAt : z.string().optional(),
    likes : z.number().optional(),
    dislikes : z.number().optional(),
    });
    let client:any;
    let db:any;
    let posts: Posts | any    ;
    
/// api to get all posts
export async function GET(_req: Request,) {
    try {
        client = await clientPromise;
        db = await client.db("echodb");
        posts = await  db.collection("posts");
        const data:Posts = await posts.find().toArray();
        return Response.json({data});
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
        db = await client.db("echodb");
        posts = await  db.collection("posts");
        
        // get the data from the request
        const data = await  req.json();
        console.log(data , "###########data #########")
        // validate the data
        const parsedData = postSchema.safeParse(data);
        console.log(parsedData , "###########parsedData #########")
        if (!parsedData.success) {
        throw new Error("Invalid Data");
        }
        // insert the data into the database
        await posts.insertOne(parsedData.data);
        //return Response
        return Response.json(data);
    } catch (error: any) {
        return Response.json({ error: "Internal Server Error" });
    } finally {
    }
}
