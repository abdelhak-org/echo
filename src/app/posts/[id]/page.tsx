'use client'

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import { Post } from "@/types/interfaces"; // Import the 'Post' type from the appropriate module

const PostView = () => {
  const params = useParams();

  console.log("id =>", params?.id)
  const [post, setPost] = useState<Post | undefined>(undefined);
  const fetchPost = async () => {
    try {
  
        const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
        const data = await  res.json();
        console.log("data =>",data);
        setPost(data.post);
      
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [params]);

  useEffect(() => {
    fetchPost();
  }, [params]);

  return (
    <article className="w-full min-h-screen px-4 py-8">
      <h3 className="text-4xl font-bold capitalize my-8 mx-auto w-fit font-sans text-neutral-900">
        {post?.title}
      </h3>
      <h5 className="text-xl font-bold font-sans capitalize my-8 mx-auto w-fit text-neutral-900/80">
        {}
      </h5>
      <div className="w-[670px] h-fit mx-auto relative my-4 px-2 flex items-center">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{}</p>
      </div>
      <img
        className="mx-auto my-8"
        src="https://source.unsplash.com/random/600x400"
        alt="Next.js"
      />
      <p className="text-lg font-normal text-neutral-900/80 mx-auto w-[640px] indent-4 text-left font-mono">
        {post?.content}
      </p>
    </article>
  );
};

export default PostView;
