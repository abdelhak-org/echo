'use client'

import { ModeToggle } from "../ModeToggle";
import { useRouter } from "next/navigation";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
const Navbar = () => {
  const Router = useRouter();
  return (
    <nav
      className="w-screen h-[75px] dark:text-neutral-100 dark:bg-neutral-900
      bg-neutral-100 text-neutral-900"
    >
      <div className="max-w-[1534px] h-full flex justify-between items-center   z-50 mx-auto px-8
    ">
      <h4
      className="text-4xl font-light cursor-pointer font-script  "
      onClick={() => Router.push("/")}
      >Echo 
      </h4>
      <div>
        <ModeToggle />
      </div>
      <div className="flex space-x-8 items-center ">
         <SignUpButton />
         <LoginButton />
      </div>

      </div>
    </nav>
  );
};

export default Navbar;
