//import data from "../../posts/data";
import connectToDb from "../../../lib/mongodb";

let client: any;
let db: any;
let posts: any;
 
export async function GET(_req: Request,) {
    try {
        client = await connectToDb();
        db = await client.db();
        posts = await  db.collection("posts");
        const data = await posts.find().toArray();

        return Response.json({data});
    } catch (error: any) {
        console.log(error.message);
        return Response.json({ error: "Internal Server Error" });
    }
}
