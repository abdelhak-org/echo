"use client"
import { NextPage } from "next";
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
//import loadConfig from "next/dist/server/config";
const Dashboard: NextPage = (): JSX.Element => {
  const {data:session , status} = useSession();
  const Router = useRouter();
  const logout = async () => { 
       await signOut();
        Router.push("/auth/login");
  }
  
  
  if(status === "authenticated") {
    return (
      <section className="w-[1534px] h-screen text-center py-4 mx-auto boreder border-neutral-200 ">
        <h1 className="text-3xl font-bold text-gray-900 my-8">Welcome to Dashboard</h1>
        <p className="text-lg text-gray-800">You are logged in as {session?.user?.email}</p>
        <button 
        onClick={logout} 
        className="bg-primary-500 text-neutral-900 border bg-slate-100 px-4 py-2 mt-4 rounded-md">Logout</button>
      </section>
    )
  }
  return <h1 className="w-fit mx-auto my-8 ">loading</h1>;
}
export default Dashboard;