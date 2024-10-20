import cloudinary from "../../../../../../cloudinary.config";


export async function  POST(req:Request , Res:Response) {
      if(!req.body) return Response.json("No Image is Uploaded");
      const formData = req.formData() ;
      if(!formData) return Response.json("No Image is Uploaded");
    //  const file = formData ? formData.get("image") : null;
    const arrayBuffer = await file?.arrayBuffer();
    const buffer =  Buffer.from(arrayBuffer); //new Uint8Array(arrayBuffer);
    await new Promise((resolve , reject) => {
        cloudinary.uploader.upload_stream({folder:"echo/profile"}, (error  , result)=>{
            if(error){
                reject(error);
                return;

            }
            resolve(result);
        }).end(buffer); 
    });



     return Response.json("image is Uploaded")
}