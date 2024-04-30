import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
const SignUpButton = () => {
  const { data: session, status } = useSession();


  if (status === "authenticated") {
    return <p className="text-xs font-sans "> loged in as :{session.user?.email}</p>;

  }


  return( 
  <Button
  className=" font-light  font-roboto px-4 py-3 text-sm "
    variant={"outline"} >
    <Link href="/register">
      Sign Up
    </Link>
    </Button>
    ) ;
}


export default SignUpButton;
