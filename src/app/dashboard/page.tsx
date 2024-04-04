"use client"
import { NextPage } from "next";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
//import loadConfig from "next/dist/server/config";
const Dashboard: NextPage = (): JSX.Element => {

  const {data:session , status} = useSession();

  const Router = useRouter();
 
  
  
  if(status === "authenticated") {
    return (
      <section className="w-[1534px] h-screen text-center py-4 mx-auto boreder border-neutral-200 ">
        <h1 className="text-4xl font-bold text-gray-900 my-8 w-fit mx-auto">Welcome in The Dashboard</h1>
       
      </section>
    )
  }
  return <h1 className="text-4xl font-bold text-gray-900 my-8 w-fit mx-auto ">Dashboard</h1>;
}
export default Dashboard;