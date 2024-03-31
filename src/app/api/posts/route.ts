//import data from "../../posts/data";
import clientPromise from "../../../lib/mongodb";
import {z} from "zod";
const userSchema = z.object({ 
    title: z.string(),
    content: z.string()
  });

let client: any;
let db: any;
let posts: any;
 
export async function GET(_req: Request,) {
    try {
        client = await clientPromise;
        db = await client.db();
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
        db = await client.db();
        posts = await  db.collection("posts");

        // get the data from the request
        const data = await  req.json();
        // validate the data
        const parsedData = userSchema.safeParse(data);
        if (!parsedData.success) {
            return Response.json({ error: parsedData.error });
        }
        // insert the data into the database
        await posts.insertOne(parsedData.data);
        //return Response
        return Response.json(data);
    } catch (error: any) {
        console.log(error.message);
        return Response.json({ error: "Internal Server Error" });
    } finally {
    }
}
