
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function Home() {
  const {data:session , status} = useSession();
  
  if (status === "authenticated") {
     return (
    <>
      <Link
       className="text-lg text-blue-500 hover:text-blue-700 mt-4"
       href="/dashboard" >dashboad</Link>
       <p>Signed in as {session.user.email}</p>)
    </>
     )
  }

  return (
    <main className="flex w-[1534px] min-h-screen flex-col items-center text-red-700
     justify-between p-24 border mx-auto border-neutral-200">
      
       <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
  
    </main>
  );
}
