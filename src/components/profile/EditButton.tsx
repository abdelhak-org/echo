'use client'
import React from "react";
import cloudinary from "../../../cloudinary.config";
import { Edit3Icon } from "lucide-react";
import DefaultProfileCard from "./DefaultProfileCard";
import { useSession } from "next-auth/react";
const EditButton = () => {
  const [showInput, setShowInput] = React.useState<boolean>(false);
  const { data: session } = useSession();
  const id = session?.user?.userId as string  ;
  const public_id = session?.user?.image as string ;
    if (showInput) {
      return <DefaultProfileCard id={id} />;
    }
    
    const clickHandler = () => {
    
      setShowInput(true)
    }


    return (
      <button
        onClick={clickHandler}
        className="border  border-neutral-600 px-4 py-4 rounded-full  
              bg-slate-900/60 shadow-xl  text-white text-xl "
      >
        <Edit3Icon size={24} />
      </button>
    );
};

export default EditButton;
