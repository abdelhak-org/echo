"use client";
import React, { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import SignUpButton from "./SignUpButton";
import Link from "next/link";
import { Button } from "../ui/button";
import ProfileMenu from "./ProfileMenu";
const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center items-center  bg-[#EEEEEE] border 
     border-transparent  border-b-gray-300  h-[55px]
     dark:bg-black dark:border-b-gray-800
     ">

      <div className="w-full  max-w-[1536px] flex  justify-between  items-center 
      
      px-8 
      
      ">
          <h3 className="hidden  md:block px-8 py-2 text-xl font-bold dark:text-white ">
        <Link href="/">
            Echo Blog
        </Link>
          </h3>
        
        <ModeToggle />
        
        <div className="flex items-center grow md:grow-0  font-semibold   space-x-4 flex-row">
          <Link href="/posts">
            <Button
              className="text-gray-800 font-sans text-[14px] dark:text-gray-100   "
              variant={"link"}
            >
              Blog
            </Button>
          </Link>
          <SignUpButton />
          <ProfileMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
