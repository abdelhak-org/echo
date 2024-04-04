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
  return <Button variant={"default"} onClick={()=> Router.push("/login")}>Log In</Button>;
};

export default LoginButton;
