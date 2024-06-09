"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Page = () => {
  const [url, setUrl] = useState<string>("");
  const [publicId, setPublicId] = useState<string>("");

  const {
    data: session,
    status,
    update,
  }: { data: any; status: string; update: () => void } = useSession();
  const router = useRouter();
  // update user with new image

  // remove image from cloudinary and update user
  const removeImage = async () => {
    const res = await fetch("/api/deleteimage", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session?.user?.userId,
      }),

    });
    if (res.ok) {
      update();
    }
  };
  // get image url from session
  const imageUrl = session?.user?.src;

  if (!imageUrl) {
    return <ImageUploader setPublicId={setPublicId} session={session} />;
  }
  return (
    <div className="w-full h-full py-24 ">

    <div className=" w-60 h-60  text-center text-2xl font-semibold  mx-auto  p-4 relative border border-neutral-500/40
     shadow-md rounded-md   ">
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt="profile"
        className="w-full h-full w-45 h-45 rounded-full shadow-md border border-blue-600"
      />

      <FaRegEdit
      className="absolute bottom-1 right-1 text-2xl cursor-pointer text-blue-600"
      onClick={removeImage} />
    </div>
      </div>
  );
};

export default Page;
