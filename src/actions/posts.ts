import clientPromise from "@/lib/mongodb";
import { Posts  , Post} from "@/types/interfaces";

let client:any;
let db:any;
// get Posts
export async function getPosts() {
  try {
    client = await clientPromise;
    db = await client.db("echodb");
    const  postsCollection = await  db.collection("posts");
    const posts:Posts = await postsCollection.find().toArray();
    if (!posts ) {
      throw new Error("no posts found")
    }
  
    
    return posts
} catch (error: any) {
  Response.json({message: error.message})
} finally {
}
 };
 
//getPostByUserid

export async function getPostsByUserId(id:string) {
  try {
    client = await clientPromise;
    db = await client.db("echodb");
    const  postsCollection = await  db.collection("posts");
    const posts:Posts = await postsCollection.find({userId:id}).toArray();
    if (!posts ) {
      throw new Error("no posts found")
    }
  
    
    return posts
} catch (error: any) {
  Response.json({message: error.message})
} finally {
}
 };
 

 // add Post 

 export async function addPost(post:Post) {
    try {
      client = await clientPromise;
      db = await client.db("echodb");
      const  postsCollection = await  db.collection("posts");
      const result = await postsCollection.insertOne(post);
      if (!result) {
        throw new Error("no post added")
      }
      return result
  } catch (error: any) {
     Response.json({message: error.message})
  } finally {
  }
   }

   
   //getPostById

export async function getPostById(id:string) {
  try {
    client = await clientPromise;
    db = await client.db("echodb");
    const  postsCollection = await  db.collection("posts");
    const posts:Posts = await postsCollection.find({id:id}).toArray();
    if (!posts ) {
      throw new Error("no posts found")
    }
  
    
    return posts
} catch (error: any) {
  Response.json({message: error.message})
} finally {
}
 };
 