import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { User } from "@/types/interfaces";
const SignUpButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return (<p className="text-xs font-sans "> Loading ...</p>);
  if (status === "authenticated") {
    return (<p className="text-xs font-sans "> Welcome ! {session.user?.userName}</p>);

  }


  return( 
  <Button
  className="text-neutral-500 font-sans text-[14px]   "
    variant={"link"} >
    <Link href="/register">
      Sign Up
    </Link>
    </Button>
    ) ;
}


export default SignUpButton;
