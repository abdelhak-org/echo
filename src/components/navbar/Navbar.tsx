"use client";
import React, { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex  justify-center items-center  w-screen  bg-white shadow-md rounded-md  h-16  z-50 font-sans dark:bg-transparent">
      <div className="max-w-[1534px] flex w-full justify-between px-8   ">
        <Link href="/">

        <h3 className=" hidden md:block px-8 py-2 font-semibold dark:text-white ">
          Echo Blog
        </h3>
        
        </Link>
        
        <ModeToggle/>

        <div className=" items-center justify-evenly font-semibold flex space-x-2 flex-row">
          <SignUpButton/>
          <LoginButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
