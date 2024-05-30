'use client'

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import { Post } from "@/types/interfaces"; // Import the 'Post' type from the appropriate module
const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState<Post >();
  const fetchPost = async () => {
    try {
  
        const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
        const data = await  res.json();
        setPost(data.post);
        console.log(data.post)
      
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [params]);


  return (
    <article className="w-full max-w-[1080px] min-h-screen px-4 py-8 mx-auto relative">
      <img
        className="mx-auto my-8 w-full h-[360px] object-cover rounded-md"
        src="https://source.unsplash.com/random/600x400"
        alt="Next.js"
      />
      <h3 className="text-2xl font-bold  mt-4 mb-2  mx-auto w-fit font-sans text-neutral-900 tracking-wide">
        {post?.title}
      </h3>
      <p 
      className ="text-center text-sm text-neutral-700/80"
      >{post?.description?.substring(0,80)}</p>
      
      <div className=" h-fit mx-auto relative my-4 px-2 flex items-center">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" width="15px"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{post?.createdAt?.substring(0,10)}</p>  
         <p >by Shadcn</p>
      </div>
      <div
      dangerouslySetInnerHTML = {{  __html : post?.content }}
      className= "  text-neutral-900/80 mx-auto  pr-12  text-left font-sans leading-8 tracking-wide text-[16px]" />
      
    </article>
  ); 
};

export default PostView;
