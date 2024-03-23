"use client"

import React , {useState } from "react"
import { useTheme } from "next-themes"
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";


import { Button } from "@/components/ui/button"
export function ModeToggle() {
  const {theme ,  setTheme } = useTheme()
 

  if(theme === "dark" ){
   return (
    <Button onClick={() => setTheme("light")}>
    <FiSun/>
    </Button>
   )
  }
  return (
 
    
       
      
        <Button onClick={() => setTheme("dark")}>
        <BsMoonStarsFill />

        </Button>
     
      
  )
}
