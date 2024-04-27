import clientPromise from "@/lib/mongodb";
import { Posts } from "@/types/interfaces";

let client:any;
let db:any;

export async function getPosts() {
  try {
    client = await clientPromise;
    db = await client.db("echodb");
   const  postsCollection = await  db.collection("posts");
    const posts:Posts = await postsCollection.find().toArray();
     console.log("(db)",db)
    return posts
} catch (error: any) {
    console.log("error==>", error)
} finally {
}
 };