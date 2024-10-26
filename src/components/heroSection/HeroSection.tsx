'use client'

import { useSession } from 'next-auth/react';
import Link from 'next/link'
 import { useRouter } from 'next/navigation';
const HeroSection = () => {
      const {data:session, status } = useSession();
      const router = useRouter() ;

       
  return (
    <section className="relative  px-6 py-8  lg:px-8 grow border border-transparent
     border-b-gray-300/50">
 
    <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-32 ">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-serif
         dark:text-neutral-300">
        Echo Blog: Amplifying Voices, Sharing Stories
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-gray-700">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href={status ==="authenticated" ?"/dashboard" :"/login"}
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
          <Link href="/posts?page=1" className="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-700">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  
  </section>
  )
}

export default HeroSection
