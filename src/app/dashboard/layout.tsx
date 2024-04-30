"use client"

import ControllMenu from "@/components/dashboard/ControllMenu";




export default function DashboardLayout({
  children 

}:{
  children: React.ReactNode;
}) {
  return (
      <section className="w-[1534px]  min-h-screen flex space-x-8 mx-auto p-4 border 
      roundeded-md
      bg-white" >
        <ControllMenu />
        <main className="w-full  mx-auto p-2">
        {children}
        </main>
        
        </section>
  );
}
