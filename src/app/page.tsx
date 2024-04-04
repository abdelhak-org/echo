"use client"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const {data:session , status }= useSession();
  const router = useRouter();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  interface Post {
    userId?: number;
    id: number;
    title: string;
    body: string;
  }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  if (status === "unauthenticated"){
    router.push("/login");
  }
  return (
    <main className="flex w-full min-h-screen flex-col items-center text-gray-900 justify-between p-24 border mx-auto border-gray-200">
        <h1 className="text-4xl font-bold capitalize my-8 ">Welcome to Echo </h1>
        <section  className="w-full h-screen bg-yellow-300 p-4 overflow-auto">
         {
          posts.map((post:Post) => (
            <article key={post.id} className="mb-4 p-4 bg-white rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </article>
          ))
         }
        </section>
    </main>
  );
}
