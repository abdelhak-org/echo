
"use client";

import { useEffect  , useState} from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import { Post } from "@/types/interfaces";
let post: Post 
const PostView =  ({})  => {
  const [post, setPost] = useState(null);
  const params = useParams();
  console.log("params =>",params)
  useEffect( () => {
    async function fetchPost() { 
      const res = await fetch(`http://localhost:3000/api/posts/${params.id}`)
      const post:Post = await res.json()
      setPost(
        post
      )
     }
     fetchPost();
  },[post])
  
  return (
    <article className="w-full min-h-screen  px-4  py-8">
      <h3 className="text-4xl font-bold capitalize my-8 mx-auto w-fit font-sans text-neutral-900  ">
        { post?.title}
      </h3>
      <h5 className="text-xl font-bold font-sans capitalize my-8 mx-auto w-fit text-neutral-900/80">
        Top Next.js Tools to Boost Your Development Workflow in 2024
      </h5>
      <div className="w-[670px] h-fit mx-auto relative my-4  px-2 flex items-center ">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Vidura p, </p>
      </div>
      <img
        className="mx-auto my-8 "
        src="https://source.unsplash.com/random/600x400" 
        alt="Next.js"
       
      />
      <p className="text-lg font-normal text-neutral-900/80 mx-auto w-[640px] indent-4 text-left font-mono ">
      {
        post?.content
      }
      </p>
    </article>
  );
};

export default PostView;
