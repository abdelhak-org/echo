import z from 'zod';
const userSchema = z.object({
    userId :z.string(),
    src : z.string().optional(),
    userName: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });


  export async function GET(_req: Request, {params}:{params:{id:string}} ):Promise<Response>{
    const  {id}= params ;
    try {
      const client = await clientPromise;
      const db =    client.db("echodb");
      const collection  = db.collection("posts");
      const post  = await collection.findOne({ _id: new  ObjectId(params.id)});
      if(!post){
       throw new Error("Post not found")
      }
    
      return Response.json({post})
   } catch (error:any) {
      return Response.json({error: error.message});
   }  finally {
   }
}