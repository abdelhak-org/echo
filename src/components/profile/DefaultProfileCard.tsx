'use client'
import React from "react";
import profileImg from "../../../public/profile.jpg";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
const DefaultProfileCard = ({ id }: { id: string }) => {



  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file) return;
    const formaData = new FormData();
    formaData.append("image", file);
    formaData.append("userId", id || "");
     const res= await fetch(`/api/register/${id}/uploadimage`, {
      method: "POST",
      body: formaData,
    });
    if (res.ok) {
      await signOut();
      redirect("auth/login");
    }
    await signOut();
    redirect("auth/login");
  };

  return (
    <div className="w-60 h-60  flex justify-center items-center rounded-full overflow-hidden border border-neutral-300 relative ">
      <Image
        src={profileImg}
        alt="profileImg"
        className="w-full h-full object-cover"
      />

      <label
        className="flex flex-col items-center justify-center w-full h-64 border-2 absolute top-0 left-0
     border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-gray-700
      hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className=" mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>{" "}
          </p>
          <p className=" text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF{" "}
          </p>
        </div>

        <input className="hidden" type="file" onChange={onChangeHandler} />
      </label>
    </div>
  );
};

export default DefaultProfileCard;
