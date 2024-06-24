// pages/api/upload.js
import cloudinary from "../../cloudinary.config";

export async function uploadImg(formData: FormData) {
    'use server'

    const file = formData.get('image') as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer =  Buffer.from(arrayBuffer); //new Uint8Array(arrayBuffer);
    console.log("Buffer from action",buffer )
    await new Promise((resolve , reject) => {
        cloudinary.uploader.upload_stream({folder:"echo/profile"}, (error  , result)=>{
            if(error){
                reject(error);
                return;

            }
            resolve(result);
            console.log(result?.secure_url);
        }).end(buffer); 
        
    });
   
}




/*

  async function create(formData: FormData) {
    
    const file = formData.get('file') as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
        if (error) {
          reject(error);
        } 
        resolve(result);
  
      }).end(buffer);
  
    })
   

  }
*/