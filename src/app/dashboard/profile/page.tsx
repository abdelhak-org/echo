'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import ProfileCard from "@/components/profile/ProfileCard";
import DefaultProfileCard from "@/components/profile/DefaultProfileCard";

interface User {
  userId: string;
  email: string;
  name: string;
  src: string;
}

interface Session {
  user: User;
}

const Page = () => {
  const { data: session, status } = useSession();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // Add any necessary logic here
  }, [session]);

  if (!session?.user) return null;

  const { userId, src } = session.user;

  return (
    <div className="w-full h-full py-24 flex items-center justify-center">
      {src ? (
        <ProfileCard url={src} />
      ) : (
        <DefaultProfileCard id={userId} />
      )}
    </div>
  );
};

export default Page;
