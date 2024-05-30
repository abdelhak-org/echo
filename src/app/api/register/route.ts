import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcrypt";
import { z } from "zod";


const userSchema = z.object({
  userId :z.string(),
  src : z.string().optional(),
  userName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

let client:any;
let db: any;
let users;
// GET /api/register


// POST /api/register
export async function POST(req: Request) {
  try {
    // connect to the database
    client = await clientPromise;
    db = await client.db("echodb");
    users = await db.collection("users");
    
    // get the data from the request
    const data = await req.json();
    // validate the data
    const parsedData = userSchema.safeParse(data);
    if (!parsedData.success) {
    
    throw new Error("Invalid data");
    
    }

    const isExist = await users.findOne({ email: parsedData.data.email });
    if (isExist) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    parsedData.data.password = hashedPassword;

    // insert the data into the database
    await users.insertOne(parsedData.data);
    //return Response
    return Response.json({ message: "you are  registered successfully" });
    
  } catch (error: any) {
    return Response.json({ error: error.message});
  } finally {
  }
}
