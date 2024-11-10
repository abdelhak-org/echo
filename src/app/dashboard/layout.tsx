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
        const unauthenticated = status === 'unauthenticated';
          
        if (!session || unauthenticated ) router.push('/login');
        if (loading) return <Loading />;
          

  return (
        <section className="container  grow  mx-auto p-4 border flex border  roundeded-md dark:bg-neutral-800 
          mt-4 mb-4 " >
          <ControllMenu />
          <main className="w-full grow  flex flex-col mx-auto p-2
          
          bg-white  dark:bg-neutral-800 rounded-md md:overflow-y-auto mt-2 ">
          {children} 
          </main> 
        
        </section>






  );
} ;

