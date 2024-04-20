'use client'
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tiptap from "@/components/tiptap/Tiptap";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  return (
    <section className="w-[1534px] min-h-screen text-center mx-auto">
      <Tabs defaultValue="write" className="w-full h-full py-8">
        <TabsList className="w-[600px] py-8 px-2 bg-neutral-100 font-sans space-x-2 mx-auto">
          <TabsTrigger className="text-xl py-3 text-neutral-800/50 font-mono capitalize w-full font-bold border border-neutral-200" value="profile">
            Home
          </TabsTrigger>
          <TabsTrigger className="text-xl py-3 font-bold text-neutral-800/50 font-mono capitalize w-full" value="write">
            Write
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full h-full p-12 bg-white border border-neutral-200" value="profile">
          <h1 className="text-4xl font-bold text-neutral-800/90 font-mono">
            Welcome to your Dashboard
          </h1>
          <p className="text-lg text-neutral-800/70">
            {session?.user?.email || "Loading..."}
          </p>
        </TabsContent>
        <TabsContent className="w-full h-full p-12 bg-white border border-neutral-200 rounded-md" value="write">
          <Tiptap />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Dashboard;
