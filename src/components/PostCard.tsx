"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
interface PostCardProps {
  id: string;
  title: string;
  content: string;
  author?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.blob());

const PostCard = (props: PostCardProps) => {
  const url = "https://source.unsplash.com/random/600x400";

  const { data, error } = useSWR(url, fetcher);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const dataUrl = URL.createObjectURL(data);

  return (
    <Card className="my-4 flex    -space-y-2 border border-transparent justify-between items-center
      border-b-neutral-200 ">
        
        <div className="bg-neutral-100"> 
      <CardHeader className=" ">
          <Avatar className="mr-4">
            <AvatarImage src="https://source.unsplash.com/random/35*35" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardDescription className="font-sm font-mono">Devon Wijesinghe in Stackademic ·Mar 25, 2024</CardDescription>
       
        <CardTitle className= "text-2xl font-bold font-sans tracking-wide  " > 
      
        <Link href={`http://localhost:3000/posts/${props.id}`} > 
        {props.title}
        </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="font-mono indent-4 text-md text-neutral-900  mr-8">
        {props.content}
      </CardContent>
      
      </div>
     
    </Card>
  );
};

export default PostCard;

//<Image src = {dataUrl}  alt="Random Image" width={260} height={220} className="mx-auto"/>