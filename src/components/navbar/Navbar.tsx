
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
const Navbar = () => {
  return (
    <nav
      className= "w-screen  h-[55px] bg-neutral-950 text-white  "
    >

      <div className="max-w-[1534px] w-full h-full mx-auto
        flex justify-between items-center px-4  
    ">
      <Link href="/">
      <h3
      className="font-bold tracking-widest text-2xl cursor-pointer "
      >ECHO
      </h3>
      </Link>
      <div>
        <ModeToggle />
      </div>
      <div className="flex space-x-4 items-center ">
      <SignUpButton />
      <LoginButton />
      </div>

      </div>
    </nav>
  );
};

export default Navbar;
