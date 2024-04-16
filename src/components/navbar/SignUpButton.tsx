import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
const SignUpButton = () => {
  const { data: session, status } = useSession();


  if (status === "authenticated") {
    return <p > loged in as :{session.user?.email}</p>;

  }


  return( 
  <Button
  className=" font-bold font-roboto px-4 py-3 "
    variant={"outline"} >
    <Link href="/register">
      Sign Up
    </Link>
    </Button>
    ) ;
}


export default SignUpButton;
