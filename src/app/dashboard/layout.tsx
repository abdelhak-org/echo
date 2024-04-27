"use client"

import ControllMenu from "@/components/dashboard/ControllMenu";




export default function DashboardLayout({
  children 

}:{
  children: React.ReactNode;
}) {
  return (
      <section className=" w-screen  h-screen flex space-x-8 mx-auto p-4 border  bg-white" >
        <ControllMenu />
        <main className="flex-1">
        {children}
        </main>
        
        </section>
  );
}
