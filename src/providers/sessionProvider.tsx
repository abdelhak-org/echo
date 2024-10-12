'use client'

import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

const customSessionProvider = ( {
    children ,  params: { session , ...params },

  }: Readonly <{
    children: React.ReactNode;
    params:{ session: any}
  }>) => {
    const [isClient , setIsClient ] = useState(false)

    useEffect(()=>{
     setIsClient(true)
     
    },[])
     
    if (isClient) {
       return (
      <SessionProvider session={session}  >
      {children}
      </SessionProvider>
   
     )}
     return null 
}


export default customSessionProvider