'use client'

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
      const {data:session, status } = useSession();
  return (
   <section className="w-screen h-[600px] relative ">
  <div className='w-full h-full top-0 right-0'>
    <img src = "https://source.unsplash.com/1600x900/?nature,water"
     alt="hero" className="w-full h-full object-cover" />
  </div>
  <div className=" bg-neutral-900/60 p-8 rounded-md 
  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  ">
    <h1 className="text-4xl text-white font-bold font-sans  ">Welcome to ECHO BLOG</h1>
    <p className="text-white text-lg mt-4 font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis.</p>
    <button className="bg-blue-500 text-white px-4 py-3 rounded-md mt-4 font-bold">
      <Link href={status === 'authenticated'?'/dashboard' :'/login'}>
      Get Started
      
      </Link>
      </button>   
  </div>
   </section>
  )
}

export default HeroSection
