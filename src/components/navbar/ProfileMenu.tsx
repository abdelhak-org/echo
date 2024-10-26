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
        <Button variant={"outline"} 
        className="  text-gray-800 text-[14px] cursor-pointer dark:text-gray-100
        "
        onClick={()=> Router.push("/login")}>Log In</Button>
        );; 
    }




  return (
    <div

     ref= {myRef}    
    className="relative ml-3 bg- rounded-full border border-gray-400 p-[2px]  ">
   
      
      <Avatar
      onClick={()=> setIsOpen(!isOpen)}
       className="  cursor-pointer  text-sm rounded-full  
       "
      >
      <AvatarImage
          src={session?.user?.src || 'https://res.cloudinary.com/drxurev4o/image/upload/v1729318533/echo/e5115279-62f7-423a-a084-af9f255f1617/profile/qe6jr17d40sfce6aqqux.png'} 
          alt={session?.user?.name || 'User Name'}
          className='w-full h-full object-cover rounded-full overflow-hidden object-center '
       />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    {
    isOpen && (
      <nav
      className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
    >
      <ul>

      <li>
        <a href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 border border-transparent border-b-gray-100">
         Profile
        </a>
      </li>
      <li>
        <a href="/dashboard/setting" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100   border border-transparent border-b-gray-100">
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

