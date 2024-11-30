import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
export async function GET(request: Request, response:Response){
  try {
    console.log("REquest recieved");
    const client = await clientPromise;
    const db = client.db("echodb");
    const collection = db.collection("posts");
    const itemCount = await db.collection("posts").countDocuments({})

    const posts = await collection.find({}).toArray();
    if (!posts) {
      throw new Error("Posts not found");
    }
    
    return Response.json( {posts:posts , count:itemCount} );
  } catch (error: any) {
    return Response.json({ error: error.message });
  } finally {
  }
}
      