"use client"

import React , {useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";


import { Button } from "@/components/ui/button"
export function ModeToggle() {
  const {theme ,  setTheme } = useTheme()
  const [isClient , setIsClient] = useState(false);
    useEffect(()=>{
     setIsClient(true)
    },[])
    if(!isClient) return  ;
    if(theme === "dark" ){
   return (
    <Button
    className="bg-transparent  hover:bg-gray-800"
    onClick={() => setTheme("light")}>
    <FiSun
    color="white"
    size={24}
    />
    </Button>
   )
  }
  return (
        <Button
        
        className="bg-transparent text-gray-800 hover:bg-gray-300"
        onClick={() => setTheme("dark")}>
        <BsMoonStarsFill
        size={24}
        />
        </Button>     
  )
}
