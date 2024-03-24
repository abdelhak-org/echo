import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async  function handler(req:NextApiRequest, res:NextApiResponse) {

   try {
     // const client = await clientPromise;
    //  const db = client.db("echodb")
      if (req.method === "GET") {
         let bodyObject = JSON.parse(req.body);
         console.log(bodyObject)
        //  const posts = await db.collection("posts").find({}).limit(10).toArray();
      //     console.log(posts)
          res.json({ message: "GET request to /api/posts" });
      }
      res.status(405).json({ error: "Method Not Allowed" });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
   }
};