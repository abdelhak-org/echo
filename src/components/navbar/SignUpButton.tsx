"use client";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const SignUpButton = () => {
  const { data: session, status } = useSession();
  const Router = useRouter() ;


  if (status === "authenticated") {
    return <p > loged in as :{session.user?.email}</p>;

  }
  return <Button variant={"outline"} onClick={()=> Router.push("/register")}>Sign Up</Button>;
};

export default SignUpButton;
 