'use client'

import { Button } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const Router = useRouter();
  return (
    <nav
      className="w-screen h-[105px]  flex justify-between items-center px-16
      dark:text-neutral-100 dark:bg-neutral-950 
       bg-neutral-100
      
      "
    >
      <h4 
      className="text-2xl font-bold cursor-pointer"
      onClick={() => Router.push("/")}
      >ECHO BLOG</h4>
      <div>
        <ModeToggle />
      </div>
      <div className="flex space-x-8">
        <Button
        onClick={() => Router.push("/register")}
        variant={"outline"}>Sign Up</Button>
        <Button
        onClick={() => Router.push("/login")}
        > Log In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
