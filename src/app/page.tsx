"use client"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PostCard from "@/components/PostCard";
import { Post } from "@/types/interfaces"
export default function Home() {
  const {data:session , status }= useSession();
  const router = useRouter();
  const url = "http://localhost:3000/api/posts";
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);
  if (status === "unauthenticated"){
    router.push("/login");
  }
  return (
    <main className="flex w-[1534px]  min-h-screen flex-col items-center text-neutral-900 justify-between p-24 border mx-auto border-gray-200">
        <h1 className="text-4xl font-bold capitalize my-8 ">Welcome to Echo </h1>
        <section  className="w-full h-screen  p-4 overflow-auto">
         {
          posts?.map((post:Post) => (
           <PostCard key={post.id} title={post.title} content={post.content} author ="johni johni"/>
          ))
         }
        </section>
    </main>
  );
}
