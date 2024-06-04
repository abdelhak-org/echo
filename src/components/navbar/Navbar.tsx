import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import logo from "../../../public/logo.webp";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full h-[55px] bg-neutral-950 text-white z-50">
      <div className="container w-full h-full mx-auto flex justify-between items-center">
        <Link href='/' suppressHydrationWarning  >
        <h3 className="font-bold tracking-widest text-2xl cursor-pointer font-mono">
          Echo Blog
        </h3>
        
        </Link>
        <ModeToggle />
          <div className="flex space-x-4 items-center">
          <SignUpButton />
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
