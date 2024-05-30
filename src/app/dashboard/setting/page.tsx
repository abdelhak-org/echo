import React from 'react'
import {v2 as cloudinary} from 'cloudinary';



(async function() {

  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  // Upload an image
  const uploadResult = await cloudinary.uploader.upload("https://res.cloudinary.com/profile/image/upload/getting-started/shoes.jpg", {
      public_id: "shoes"
  }).catch((error)=>{console.log(error)});
  
  console.log(uploadResult);
  
  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url("shoes", {
      fetch_format: 'auto',
      quality: 'auto'
  });
  
  console.log(optimizeUrl);
  
  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url("shoes", {
      crop: 'auto',
      gravity: 'auto',
      width: 500,
      height: 500,
  });
  
  console.log(autoCropUrl);    
})();




const page = () => {
  return (
    <div className=" bg-neutral-200 rounded-md py-8">
    <h1 className="text-3xl text-center my-8 font-bold tracking-wider">
      Setting
    </h1>
 
  </div>
  )
}

export default page
