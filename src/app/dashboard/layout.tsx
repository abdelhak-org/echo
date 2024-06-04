"use client"

import ControllMenu from "@/components/dashboard/ControllMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import  Loading  from "../../components/dashboard/Loading";



export default function DashboardLayout({
  children 

}:{
  children: React.ReactNode;
}) {
  const { data: session, status  , update} :{data:any , status :string , update:()=> void  }= useSession();
  const router = useRouter();
  const loading = status === 'loading';
  const authenticated = status === 'authenticated';
  const unauthenticated = status === 'unauthenticated';
    if(loading) {
      return (
              <div className="w-full grow text-center flex justify-center items-center">
                <Loading />
                
              </div>
              )
    }
  
    if (unauthenticated ) router.push('/auth/login');
  
    if(authenticated){

  return (
      <section className="container  grow  mx-auto p-4 border flex   roundeded-md  " >
        <ControllMenu />
        <main className="w-full grow flex flex-col mx-auto p-2 bg-white rounded-md">
        {children}
        </main> 
        
        </section>






  );
} ;
}
