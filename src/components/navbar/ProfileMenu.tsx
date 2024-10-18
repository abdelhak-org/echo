import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { boolean } from 'zod';
const ProfileMenu = () => {
    const { data: session, status } = useSession();
    const [isOpen , setIsOpen] = useState(false)
    const Router = useRouter() ;
    const logOut = async () => {
      await signOut({ callbackUrl: "/login", redirect: true });
    };
  
  return (
    <div  className="relative ml-3 bg-white">
    <div>
      <Button 
      
      onClick={()=> setIsOpen(!isOpen)}
      className="relative p-0 bg-white flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100">
         <span className="absolute -inset-1.5" />
         <span className="sr-only">Open user menu</span>
        <img
          alt=""
          src={session?.user?.src}
          className="w-8 h-8 rounded-full"
        />
      </Button>
    </div>
    {
    isOpen && (
      <ul
      className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <li>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
          Your Profile
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
          Settings
        </a>
      </li>
      <li
       
        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer">
          Sign out
      </li>
    </ul>
    )
    }
   
    </div>
  )
}

export default ProfileMenu