'use client'
import React , {useState , useEffect} from "react";
import Image from "next/image";
import default_card_img from "@/../public/default_card_ing.jpg"
import Link from "next/link";
import { Post } from "@/types/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiFillLike } from "react-icons/ai";

const PostCard = ({
  id,
  title,
  description,
  content,
  createdAt = new Date().toLocaleString(),
  likes = 10,
  author
}: Post) => {

    const [isClient , setIsClent] = useState(false)

    useEffect(()=>{
     setIsClent(true)
    },[])
    console.log(author.src)
  return (
    <div className="w-full max-w-[1536px]  md:min-h-[270px]  my-2
    flex flex-col items-center justify-center  md:flex-row bg-white border  dark:bg-neutral-900 overflow-hidden dark:bg-neutral-800 rounded-md shadow-lg  gap-4 p-4"
    >
      <div className="w-full  md:w-1/5  rounded-md ">

        <Image
          src={default_card_img}
          width={100}
          height={100}
          alt="cardImg"
          className="w-full h-full object-cover  rounded-md"
        />

      </div>
      <Card className="w-full md:w-4/5 flex flex-col justify-between border ">
        <CardHeader>
          <CardTitle className="font-serif   text-2xl  tracking-wide text-neutral-900 dark:text-neutral-200 ">
            <Link href={`http://localhost:3000/posts/${id}`}>{title}</Link>
          </CardTitle>
          <CardDescription
           className="font-sans text-neutral-700 dark:text-neutral-400 tracking-wide text-sm"
           >
            {description?.substring(0, 80) }
          </CardDescription>
         </CardHeader>
          
        { isClient && (<CardContent
           className=" font-sans text-neutral-700 dark:text-white tracking-wide text-lg "
           dangerouslySetInnerHTML={{ __html: content.split(" ").slice(0,80).join(" ")  }}
          />)
        }
          
        <CardFooter className="flex space-x-4">
          <Avatar>
            <AvatarImage
              src={author.src }
              alt="@shadcn"
              width={100}
              height={100}
            />
            <AvatarFallback>{author.name}</AvatarFallback>
          </Avatar>
          <p>{createdAt.substring(0, 10)}</p>
          <p className="text-blue-500 relative px-2">
            <AiFillLike
            size={18} />
            <span className="absolute left-8 top-0 z-50 text-blue-300">
              {likes}
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;
