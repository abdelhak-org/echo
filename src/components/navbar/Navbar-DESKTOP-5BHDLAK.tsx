"use client";
import React, { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import Link from "next/link";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <nav className="  w-screen flex items-center   bg-white relative top-0 left-0 z-50   h-16 font-sans dark:bg-transparent border border-transparent border-b-neutral-300">
      <div className=" w-full h-full max-w-[1536px] flex  justify-between items-center grow mx-auto ">
        <Link href="/">
          <h3 className=" hidden md:block px-8 py-2 font-semibold dark:text-white ">
            Echo Blog
          </h3>
        </Link>
        
        <ModeToggle />
        
        <div className=" items-center justify-evenly font-semibold flex space-x-2 flex-row">
          <Link href="/posts">
            <Button
              className="text-neutral-500 font-sans text-[14px]   "
              variant={"link"}
            >
              Blog
            </Button>
          </Link>
          <SignUpButton />
          <LoginButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
