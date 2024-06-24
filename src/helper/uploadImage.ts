import cloudinary from "../../cloudinary.config";

// Uploads an image file
/////////////////////////
export const uploadImage = async (imageFile :File) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      type :"file"
    };

    try {
      // Upload the image
      const result = await cloudinary.uploader.upload(imageFile   ,  options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};