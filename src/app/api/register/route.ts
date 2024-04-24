import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcrypt";
import { z } from "zod";

import {Users} from "../../../types/interfaces";

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

let client: any;
let db: any;
let users: any;
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
    
    return Response.json({ error: "Invalid data" }, { status: 400 });
    
    }
    const isExist = await users.findOne({ email: parsedData.data.email });
    if (isExist) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
    parsedData.data.password = hashedPassword;
    // insert the data into the database
    await users.insertOne(parsedData.data);
    //return Response
    return Response.json({ message: "you are  registered successfully" });
  } catch (error: any) {
    return Response.json({ error: " Server Error"  }, { status: 500});
  } finally {
  }
}
