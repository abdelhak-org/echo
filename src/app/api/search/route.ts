import clientPromise from "../../../lib/mongodb";



// pagnaition
 let client;
 let db;


export async function GET(req: Request , res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 2;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    try {
      client = await clientPromise;
      db = await client.db("echodb");
      const postsCollection = await db.collection("posts");
      const totalPosts = await postsCollection.countDocuments();
      const totalPages = Math.ceil(totalPosts / limit);
  
      const posts = await postsCollection
        .find()
        .skip(startIndex)
        .limit(limit)
        .toArray();
        console.log(posts)
      if (!posts) {
        throw new Error("No Posts Found");
      }
  
      const pagination = {
        currentPage: page,
        totalPages: totalPages,
        totalPosts: totalPosts,
      };
  
      return Response.json({ posts, pagination });
    } catch (error: any) {
      return Response.json({ error: "Internal Server Error" });
    }
  }