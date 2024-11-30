import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";
export async function GET(request: Request, response:Response){
    const session = await getServerSession();
    console.log(session?.user ,"session server user")
  try {
    console.log("REquest recieved");
    const client = await clientPromise;
    const db = client.db("echodb");
    const collection = db.collection("posts");
    const posts = await collection.findOne({});
    if (!posts) {
      throw new Error("Posts not found");
    }
    
    return Response.json( posts );
  } catch (error: any) {
    return Response.json({ error: error.message });
  } finally {
  }
}
      