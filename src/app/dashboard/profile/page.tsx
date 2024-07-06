'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { User } from "@/types/interfaces";
import ProfileCard from "@/components/profile/ProfileCard";
import DefaultProfileCard from "@/components/profile/DefaultProfileCard";


interface Session {
  user: User;
  expires: string;
  
}

const Page = () => {
  const {  data:session  , status }  = useSession() 
  const [show, setShow] = useState<boolean>(false);


  if (!session?.user) return null;

  const { userId , src } = session.user;
  return (
    <div className="w-full h-full py-24 flex flex-col items-center justify-center bg-neutral-500 rounded-md">
      {src ? (
        <ProfileCard url={src}  />
      ) : (
        <DefaultProfileCard id={userId} />
      )}
      <div className="w-full h-fit flex flex-col space-y-4 py-4">
        <h1 className="text-3xl font-semibold text-center text-white">
          {session.user.userName }
        </h1>
        <p className="text-center text-white">{session.user.email}</p>
      </div>
    </div>
  );
};

export default Page;
