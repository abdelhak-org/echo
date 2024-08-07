import { updateUser } from "@/actions/updateUser";
import { uploadImg } from "@/actions/uploadImg";

interface resProps {

    secure_url:string;
    public_id :string
}

export async function POST(req: Request, res: Response) {

    try {
    const formData = await req.formData();
    const userId = formData.get("userId") as String;
        const res = await uploadImg(formData)

        if(!res) throw new Error("no Response")
       const {secure_url , public_id } = res as resProps
        const url = secure_url 
        const id =  public_id
        
        await updateUser(userId, url ,id);

        return Response.json({ msg: "image uploaded successfully", data:res });
    }
        catch (error) {

        return Response.json({ msg: "error uploading image" });
    }
    }

    /*
     const image = formData.get("image") as File;
    const stream = await image.arrayBuffer();
    const buffer = Buffer.from(stream);
    res = await new Promise((resolve, reject) => {
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


    */