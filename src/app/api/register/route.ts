import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcrypt";
import { RegisterCredentials } from "@/components/auth/RegisterForm";
import { z } from "zod";
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

let client: any;
let db: any;
let users: any;

// GET /api/register
export async function GET(_req: Request) {
  try {
    client = await clientPromise;
    db = await client.db();
    users = await db.collection("users");
    const data = await users.find().toArray();
    return Response.json({ data });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ error: "Internal Server Error" });
  } finally {
  }
}

// POST /api/register
export async function POST(req: Request) {
    try {
    // connect to the database
    client = await clientPromise;
    db = await client.db();
    users = await db.collection("users");

    // get the data from the request
    const data = await req.json();
    // validate the data
    const parsedData = userSchema.safeParse(data);
    if (!parsedData.success) {
    return Response.json({ error: parsedData.error });
    }
    const isExist = await users.findOne({ email: parsedData.data.email });
    if (isExist) {
    return Response.json({ error: "User already exists" }, 
    { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
    parsedData.data.password = hashedPassword;
    // insert the data into the database
    await users.insertOne(parsedData.data);
    //return Response
    return Response.json(data);
    } catch (error: any) {
    console.log(error.message);
    return Response.json({ error: "Internal Server Error" });
    } finally {
    }
}
