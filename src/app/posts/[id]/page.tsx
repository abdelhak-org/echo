
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
      const post = await res.json()
      setPost(
        post
      )
     }
     fetchPost();
  },[post])
  
  return (
    <article className="w-full h-screen  px-4 overflow-auto py-8">
      <h3 className="text-4xl font-extrabold capitalize my-8 mx-auto w-fit ">
        { post?.title}
      </h3>
      <h5 className="text-xl font-bold capitalize my-8 mx-auto w-fit text-neutral-900/80">
        Top Next.js Tools to Boost Your Development Workflow in 2024
      </h5>
      <div className="w-[670px] h-fit mx-auto relative my-4  px-2 flex items-center ">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Vidura p, </p>
      </div>
      <Image
        className="mx-auto my-8 "
        src="/next.svg"
        alt="Next.js"
        width={500}
        height={500}
      />
      <p className="text-lg font-normal text-neutral-900/80 mx-auto w-[640px] indent-4">
      {
        post?.content
      }
      </p>
    </article>
  );
};

export default PostView;
