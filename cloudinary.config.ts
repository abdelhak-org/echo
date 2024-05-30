import { v2 as cloudinary } from 'cloudinary';

// Set up your cloudinary config here
cloudinary.config({
  cloud_name:"drxurev4o",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
