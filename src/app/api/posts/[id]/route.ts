import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    console.log("REquest recieved");
    const client = await clientPromise;
    const db = client.db("echodb");
    const collection = db.collection("posts");
    const post = await collection.findOne({ _id: new ObjectId(params.id) });
    if (!post) {
      throw new Error("Post not found");
    }

    const visitors = post.visitors ? post.visitors + 1 : 1;
    collection.updateOne({id:post.id}, { $set: { visitors: visitors } });
    console.log("Visitors", post, visitors);
    return Response.json({ post });
  } catch (error: any) {
    return Response.json({ error: error.message });
  } finally {
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const postId = new ObjectId(params.id);

  try {
    const client = await clientPromise;
    const db = client.db("echodb");

    const posts = db.collection("posts");

    const post = await posts.findOneAndDelete({ _id: postId });
    if (!post) {
      throw new Error("Post not found");
    }
    return Response.json("Post deleted successfully");
  } catch (error: any) {
    return Response.json({ message: error.message });
  } finally {
  }
}
