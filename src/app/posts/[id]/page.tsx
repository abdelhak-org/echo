"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import { Post } from "@/types/interfaces"; // Import the 'Post' type from the appropriate module
import Image from "next/image";

const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState<Post>();
  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
      const data = await res.json();
      console.log("data =>", data);
      setPost(data.post);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [params]);

  return (
    <article className="w-full grow px-4 py-8">
      <h3 className="text-2xl font-bold capitalize my-8 mx-auto w-fit font-sans text-neutral-900">
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
      <div className="w-[800px] h-60  mx-auto my-8  overflow-hidden rounded-md">
        <img
          className="w-full h-full   object-cover "
          src="https://res.cloudinary.com/drxurev4o/image/upload/v1712450358/samples/coffee.jpg"
          alt="post Image"
          width={100}
          height={100}
        />
      </div>
      <p
        className="text-[15px] index-2 font-normal text-neutral-900/80 mx-auto max-w-[800px] text-left font-sans"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></p>
    </article>
  );
};

export default PostView;
