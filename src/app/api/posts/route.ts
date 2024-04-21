//import data from "../../posts/data";
import clientPromise from "../../../lib/mongodb";
import { Post , Posts } from "@/types/interfaces";
import {z} from "zod";
const postSchema = z.object({ 
    title: z.string(),
    content: z.string()
    });
    let client:any;
    let db:any;
    let posts: Posts | any    ;


export async function GET(_req: Request,) {
    try {
        client = await clientPromise;
        db = await client.db("echodb");
        posts = await  db.collection("posts");
        const data = await posts.find().toArray();
        return Response.json({data});
    } catch (error: any) {
        console.log(error.message);
        return Response.json({ error: "Internal Server Error" });
    } finally {
    }
}

export async function POST(req: Request) {
    try {

        // connect to the database
        client = await clientPromise;
        db = await client.db("echodb");
        posts = await  db.collection("posts");

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
        return Response.json(data);
    } catch (error: any) {
        return Response.json({ error: "Internal Server Error" });
    } finally {
    }
}
