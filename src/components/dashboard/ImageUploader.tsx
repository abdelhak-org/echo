'use client'
import { CldImage, CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { FaImage } from "react-icons/fa6";

interface ImageUploaderProps {
  setUrl: (url:string) => void;
  setPublicId: (publicId:string) => void;
}
export default function ImageUploader({setUrl, setPublicId}:ImageUploaderProps) {
 
  

  const handleUpload =  (result:CloudinaryUploadWidgetResults) => {
     const info = result.info as object;
      if ('secure_url' in info && 'public_id' in info ) {
         const url  = info.secure_url as string;
         const publicId = info.public_id as string;
          setUrl(url);
          setPublicId(publicId);
      }
  };
  
  return (
      <div className='w-60 h-60 mx-auto flex justify-center items-center bg-neutral-200 rounded-md '>
        
        <CldUploadButton
            
            uploadPreset= {process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            onSuccess={handleUpload}
          >
          <FaImage size={24} />

          </CldUploadButton>
          
          
            
            </div>
    
  );
}



