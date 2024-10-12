import cloudinary from "../../cloudinary.config";

export async function uploadImg(formData: FormData) {
  const file = formData.get('image') as File;
  const imgType = formData.get("imgType") as string 

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  try {
    const res  = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: `echo/${imgType}/` }, (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }).end(buffer);
    });

    return  res
  } catch (error:any) {
      return Response.json({ error: error.message });
  }

}
