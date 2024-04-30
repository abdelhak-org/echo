
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
const Navbar = () => {
  return (
    <nav
      className="w-screen  h-[55px] dark:text-neutral-100 dark:bg-neutral-900 border 
      bg-neutral-50 text-neutral-900"
    >
      <div className="max-w-[1534px] h-full flex justify-between items-center   z-50 mx-auto px-4
    ">
      <Link href="/">
      <h4
      className="text-2xl font-bold cursor-pointer  tracking-wide  "
      >Echo 
      </h4>
      </Link>
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
