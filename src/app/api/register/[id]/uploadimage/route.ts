import { updateUser } from "@/actions/updateUser";
import { uploadImg } from "@/actions/uploadImg";
import cloudinary from "../../../../../../cloudinary.config";
interface resProps {

    secure_url:string;
    public_id :string
}

export async function POST(req: Request, res: Response) {
    
    try {
    const formData = await req.formData();
    const userId = formData.get("userId") as String;
    const public_id1 =  formData.get("public_id") as String;
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
 