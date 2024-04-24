import clientPromise from "@/lib/mongodb";
import { ObjectId  } from "mongodb";
import { Posts , Post } from "@/types/interfaces";

export async function GET(_request: Request, {params}:{params:{id:string}} ){
     
      try {
         const client = await clientPromise;
         const db =    client.db("echodb");
         const collection  = db.collection("posts");
         const post = await collection.findOne({_id: new ObjectId(params.id)});
         console.log("post =>", post)

     
      
         return Response.json({post})
      } catch (error:any) {
         return Response.json({status: 500, body: {error: error.message}});
      }  finally {
      }
         
      }
   
   export async function DELETE(_request: Request, {params}:{params:{id:string}} ){
   const postId = new ObjectId(params.id);
   
   try {
      const client = await clientPromise;
      const db =  client.db("echodb");
      
      const posts =  db.collection("posts");
      const post = await posts.findOneAndDelete({_id: postId});
      if(!post){
         return Response.json("Post not found")
      }
      return Response.json("Post deleted successfully")
   } catch (error) {
      return Response.json("An error occured while deleting post")
   } finally {
   }  
}







