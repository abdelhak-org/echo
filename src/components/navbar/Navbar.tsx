import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
const Navbar = () => {
  return (
    <nav className="w-full   h-[55px] bg-neutral-950 text-white  ">
      <div
        className="container   w-full h-full mx-auto
        flex justify-between items-center  
    "
      >
        <h3 className="font-bold tracking-widest text-2xl cursor-pointer ">
          <Link href="/">ECHO </Link>
        </h3>
        <ModeToggle />
        <div className="flex space-x-4 items-center ">
          <SignUpButton />
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
