import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
const SignUpButton = () => {
  const { data: session, status } = useSession();

 // if (status === "loading") return (<p className="text-xs font-sans "> Loading ...</p>);
  if (status === "authenticated") {
    return (
    <p className="text-xs font-sans mr-4 "> Welcome ! {session.user?.userName}</p>
  );

  }


  return( 
    <Link href="/register">
    <Button
    className="text-neutral-500 font-sans text-[14px]   "
    variant={"link"} >
      Sign Up
    </Button>
    </Link>
    ) ;
}


export default SignUpButton;
