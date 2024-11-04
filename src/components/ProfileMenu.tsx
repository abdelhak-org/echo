'use client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'
import useClickOutSide from '@/hooks/useClickOutSide'
import Link from 'next/link'

const navigation = [
    { name: 'Dashboard', href: 'dashboard' },
    { name: 'Profile', href: '  profile'  },
    { name: 'Setting', href: '  settings' },
  ]
const ProfileMenu = () => {
      const { data: session, status } = useSession();
      const [isOpen , setIsOpen] = useState(false)
      const Router = useRouter() ;
      const logOut = async () => {
        await signOut({ callbackUrl: "/login", redirect: true });
      };
      const clickRef = useRef();
      useClickOutSide(clickRef,()=> setIsOpen(false));


      if(status === "authenticated")
     {
     return (
    <div 
    className='relative z-50 '
    >
          <nav

           ref ={clickRef }
          className="relative ml-3">
              <div>
                <button 
                onClick={()=> setIsOpen(!isOpen)}
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={session.user?.src }
                    className="h-8 w-8 rounded-full"
                  />
                </button>
              </div>
              {
                isOpen && (
                  
                  
                  <ul
                  
                  className="absolute right-0 z-10 mt-8 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition
                  focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75
                 data-[enter]:ease-out data-[leave]:ease-in"
                 >
             {
               navigation.map((item,index)=>{
                 return (
                   <Link
                   key={index}
                   
                   href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                   >                      
                     {item.name}
                  

                   </Link>
                )
              })
            }
                 <Link
                   onClick={logOut}
                   href="" 
                   className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 "
                   >                      
                   
                     LogOut
                  

                </Link>
              </ul>
              )
            }
            </nav>
    
    </div>
  )
}

  return (
    <Button variant={"link"} 
    className=" font-bold text-neutral-700 text-[16px] cursor-pointer dark:text-slate-200
    "
    onClick={()=> Router.push("/login")}>Log In</Button>
    );
  

}

export default ProfileMenu 