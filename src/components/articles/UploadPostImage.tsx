import React from "react";
import { uploadImg } from "@/actions/uploadImg";
import { UploadIcon } from "lucide-react";

const UploadPostImage = () => {
    return (
        <div className="w-full  h-12 border border-neutral-300 rounded-md flex items-center justify-center">
        <form >
            <UploadIcon size={24} />    
            <input type="file" name="image" id="image" className="hidden"  />
        
        </form>
        </div>
    );
    };

export default UploadPostImage;
