import cloudinary from "../../../../../../cloudinary.config";
import { updateUser } from "@/actions/updateUser";


export async function POST(req: Request, res: Response) {

    try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    const userId = formData.get("userId") as String;
    const stream = await image.arrayBuffer();
    const buffer = Buffer.from(stream);
    const res = await new Promise((resolve, reject) => {
        cloudinary.uploader
        .upload_stream({ folder: "echo/profile" }, (error, result) => {
            if (error) {
            reject(error);
            return Response.json({ msg: "error uploading image" });
            }
            resolve(result);
            
            const url = result?.secure_url as String;
            const public_id = result?.public_id as String;
             updateUser(userId, url ,public_id);
        })
        .end(buffer);
    });
    return Response.json({ msg: "image uploaded successfully"});
    }
     catch (error) {
        console.error(error);
        return Response.json({ msg: "error uploading image" });
    }
    }
