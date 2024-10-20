'use client'
import { signOut, useSession } from 'next-auth/react';
import React, { useState , useRef, RefObject } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
 import { useRouter } from 'next/navigation';
import { useClickOutside } from '@/hooks/useClickOutSide';
import { Button } from '../ui/button';

const ProfileMenu = () => {
    const { data: session, status } = useSession();
    const [isOpen , setIsOpen] = useState(false) ;
    const myRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);
    const Router = useRouter()
    const logOut = async () => {
      await signOut({ callbackUrl: "/login", redirect: true });
    };
    useClickOutside(myRef, ()=> setIsOpen(false));


    if (status === 'loading') {
      return <div>Loading...</div>; 
    }
  
    if (status === 'unauthenticated') {
      return  (
        <Button variant={"link"} 
        className=" font-bold text-neutral-700 text-[16px] cursor-pointer dark:text-slate-200
        "
        onClick={()=> Router.push("/login")}>Log In</Button>
        );; 
    }




  return (
    <div

     ref= {myRef}    
    className="relative ml-3 bg-white">
    <div>
      
      <Avatar
      onClick={()=> setIsOpen(!isOpen)}
       className="relative   p-0 bg-white flex rounded-full cursor-pointer  text-sm focus:outline-none
       focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100"
      >
      <AvatarImage
          src={session?.user?.src || 'https://res.cloudinary.com/drxurev4o/image/upload/v1729318533/echo/e5115279-62f7-423a-a084-af9f255f1617/profile/qe6jr17d40sfce6aqqux.png'} 
          alt={session?.user?.name || 'User Name'}
       
       />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
    {
    isOpen && (
      <nav
      className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
    >
      <ul>

      <li>
        <a href="dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 border border-transparent border-b-gray-100">
         Profile
        </a>
      </li>
      <li>
        <a href="dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100   border border-transparent border-b-gray-100">
          Settings
        </a>
      </li>
      <li
         onClick={logOut}
         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer">
          Sign out
      </li>
          </ul>
    </nav>
    )
    }
   
    </div>
  )
}

export default ProfileMenu

