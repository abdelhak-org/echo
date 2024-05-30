// pages/api/upload.js
import cloudinary from "../../cloudinary.config";
export async function uploadImg(formData: FormData) {
    'use server'

    const file = formData.get('file') as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await new Promise((resolve , reject) => {
        cloudinary.uploader.upload_stream({ }, (error  , result)=>{
            if(error) {
                console.log(error);
                return ;
            }
            resolve(result);
        }).end(buffer); 

    });
   
}
