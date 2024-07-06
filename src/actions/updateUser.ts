import clientPromise from "@/lib/mongodb";

export async function updateUser(userId:String ,  url:String , public_id:String) {
    try {
        const client = await clientPromise;
        const db =  client.db("echodb");
        const users =   db.collection("users");
        const user = await users.findOne({ userId :userId });
        if (!user) {
            return Response.json({error: "User not found"});
        }
        await users.updateOne({ userId  }, { $set: {src: url ,image:public_id } });
        return Response.json({ message: "User updated successfully" });

    } catch (error:any) {
        
        return Response.json({ error: error.message });
    }
}