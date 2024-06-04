"use client";
import { signOut } from "next-auth/react";
import {
  CldImage,
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { FaImage, FaW } from "react-icons/fa6";
import { useRouter } from "next/navigation";
interface ImageUploaderProps {
  setPublicId: (publicId: string) => void;
  session: any;
}
export default function ImageUploader({ setPublicId ,session}: ImageUploaderProps) {
  const [url, setUrl] = useState<string>("");
  const router = useRouter();
  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info as object;
    if ("secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      const publicId = info.public_id as string;
      setUrl(url);
      setPublicId(publicId);
    }
  };
  const updateUser = async () => {
    const res = await fetch("/api/updateuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, userId: session?.user?.userId }),
    });
    if (res.ok) {
        await signOut();
        router.push("/login");
    }
  };
  if (url ==="") {
  return (  <div className="w-60 h-60 mx-auto flex justify-center items-center bg-neutral-200 rounded-md ">
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onSuccess={handleUpload}
      >
        <FaImage size={24} />
      </CldUploadButton>
     </div>
     )
     
  }
  return (
      <div className="w-60 h-60 mx-auto flex flex-col space-y-4 bg-neutral-200 rounded-md  p-2">
      <CldImage src={url} width={100} height={100} alt="  Profile" className="rounded-full w-40 h-40 mx-auto text-center" />
      <button
      onClick={updateUser}
      className="px-4 py-2 mx-auto" >
        <FaRegSave size={24} />
      </button>
      </div>
  );
}
