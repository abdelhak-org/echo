'use client'

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Page = () => {
  const [url, setUrl] = useState<string>("");
  const [publicId, setPublicId] = useState<string>("");
 
  const {
    data: session,
    status,
    update
  }: { data: any, status: string, update: () => void } = useSession();
  const router = useRouter();
  const updateUser = async () => {
    const res = await fetch("/api/updateuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url , userId: session?.user?.userId}),
    });
    if (res.ok) {
      signOut();
      router.push("/login");
    }
    
  }
    const removeImage = async () => {
    console.log("remove image")
    }
    const imageUrl = session?.user?.src;
  return (
    <div className="rounded-md py-8 flex justify-center items-center space-y-4">
      <div className="">
        
        { !imageUrl &&  
            (<div className="text-center text-2xl font-semibold mt-4 mx-auto border p-4 relative shadow-md rounded-md">
             { !url ? <ImageUploader setUrl={setUrl} setPublicId={setPublicId} /> : <img src={url} alt="profile" className="rounded-full w-40 h-40" />}
            <div className="absolute bottom-0 right-0">
            
               <button className="text-neutral-700 rounded-md" onClick={updateUser}>
                  <FaRegSave size={24} />
                </button>
            </div>
          </div>)
          }
        {
           imageUrl && (<div className="text-center text-2xl font-semibold mt-4 mx-auto border p-4 relative shadow-md rounded-md">
           <img src={imageUrl}  alt="profile" className="rounded-full w-40 h-40" />
           <div className="absolute bottom-0 right-0">
           
              <button className="text-neutral-700 rounded-md" onClick={!imageUrl ?updateUser :removeImage}>
                 {!imageUrl ? <FaRegEdit size={24} />: "remove"}
               </button>
           </div>
            </div>)
        }
    
      </div>
    </div>
  );
};

export default Page;
