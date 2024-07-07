import clientPromise from "../../../lib/mongodb";



// pagnaition
 let client;
 let db;


export async function GET(req: Request , res: Response) {
  const url = new URL(req.url);
  console.log(url)
    const page = parseInt(url.searchParams.get('page') as string) ;
    const limit = parseInt(url.searchParams.get('limit') as string) ;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    try {
      client = await clientPromise;
      db =  client.db("echodb");
      const postsCollection = db.collection("posts");
     const totalPosts = await postsCollection.countDocuments();
      const totalPages = Math.ceil(totalPosts / limit);
  
      const posts = await postsCollection.find().skip(startIndex).limit(endIndex).toArray();
      
        console.log(totalPosts)
      if (!posts) {
        throw new Error("No Posts Found");
      }
  
      const pagination = {
      currentPage: page,
        totalPages: totalPages,
       totalPosts: totalPosts,
      };
  
      return Response.json({posts, pagination});
    } catch (error: any) {
      return Response.json({ error: "Internal Server Error" });
    }
  }