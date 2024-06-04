import clientPromise from "@/lib/mongodb";
import cloudinary from 'cloudinary';
export async function DELETE(req: Request) {
    const {userId  } = await req.json();
    try {
      
        const client = await clientPromise;
        const db = await client.db("echodb");
        const users =await   db.collection("users");
        const user = await users.findOne({ userId :userId });
        if (!user) {
            return Response.json({error: "User not found"});
        }
        await users.updateOne({ userId }, { $set: {src: "" } });
        return Response.json({ message: "User updated successfully" });

    } catch (error:any) {
        
        return Response.json({ error: error.message });
    }
}