import clientPromise from "@/lib/mongodb";

export async function PUT(req: Request) {
    const { url  ,userId} = await req.json();
    console.log("URL",url)
    console.log("USERID",userId)
    try {
        const client = await clientPromise;
        const db = await client.db("echodb");
        const users =await   db.collection("users");
        const user = await users.findOne({ userId :userId });
        console.log("USER",user)
        if (!user) {
            return Response.json({error: "User not found"});
        }
        await users.updateOne({ userId }, { $set: {src: url } });
        return Response.json({ message: "User updated successfully" });

    } catch (error:any) {
        
        return Response.json({ error: error.message });
    }
}