"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginButton = () => {
  const { data: session, status } = useSession();
  const Router = useRouter() ;
  const logOut = async () => {
    await signOut({ callbackUrl: "/login", redirect: true });
  };

  if (status === "authenticated") {
    return <Button variant={"outline"}  onClick={logOut}>Log Out</Button>;

  }
  return (
  <button 
  className="font-bold text-sm rounded-md border border-gray-700 text-gray-950 px-4 py-2 dark:text-gray-100 dark:bg-gray-900
  hover:bg-gray-100 dark:hover:bg-gray-800
  "
  onClick={()=> Router.push("/login")}>Log In</button>
  );
};

export default LoginButton;
