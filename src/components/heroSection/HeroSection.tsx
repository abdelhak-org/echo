'use client'

import { useSession } from 'next-auth/react';
import Link from 'next/link'
 import { useRouter } from 'next/navigation';
const HeroSection = () => {
      const {data:session, status } = useSession();
      const router = useRouter() ;

       
  return (
    <section className="relative  px-6 pt-14  lg:px-8 grow ">
 
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400 ring-1 ring-gray-900/10 hover:ring-neutral-900/20 ">
          Announcing our next round of funding.{' '}
          <a href="/" className="font-semibold text-blue-600 dark:text-blue-400">
            <span className="absolute inset-0" />
            Read more <span >&rarr;</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-neutral-300">
        Echo Blog: Amplifying Voices, Sharing Stories
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
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
          <Link href="/posts" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-700">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  
     <hr className="w-60  h-1 mt-16 mb-8 bg-blue-500/50 dark:bg-neutral-200 mx-auto" />
  </section>
  )
}

export default HeroSection
