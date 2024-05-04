import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AiFillLike, AiFillDislike, AiOutlineDislike } from "react-icons/ai";

interface Post {
  userId?: number | string;
  id?: any;
  title: string;
  description?: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  comments?: Comment[];
  likes?: number;
  dislikes?: number;
}

const PostCard = ({
  id,
  title,
  description,
  content,
  createdAt = new Date().toLocaleString(),
  likes = 10,
  dislikes = 0,
}: Post) => {
  return (
    <Card
      className="dark:bg-neutral-800 dark:text-neutral-100 text-gray-900
    my-4 flex -space-y-2 border rounded-md border-transparent justify-between items-center flex-col
      border-b-gray-200"
    >
      <CardHeader className="w-full h-fit flex flex-col">
        <CardTitle className="text-2xl font-bold font-sans tracking-wide">
          <Link href={`http://localhost:3000/posts/${id}`}>{title}</Link>
        </CardTitle>
        <CardDescription className="font-sm font-mono">
          {description || "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\n There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."}
        </CardDescription>
      </CardHeader>

      <div className="flex justify-between items-start py-2 w-full h-fit ">
      <CardContent
        dangerouslySetInnerHTML={{ __html: content }}
        className="font-mono   text-md indent-2"
      ></CardContent>
      <img src="https://source.unsplash.com/random/300*200" alt="post" className="w-1/6 h-full mr-2" />
      </div>
     
     
     
     
      <CardFooter className="flex w-full h-fit justify-start items-center space-x-8  ">
        <Avatar className="">
          <AvatarImage
            src="https://source.unsplash.com/random/35*35"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p> {createdAt}</p>
        <p className="text-blue-500 relative ">
          {<AiFillLike size={18} />}{" "}
          <span className="absolute left-5 top-0 z-50 text-blue-300">
            {likes}
          </span>
        </p>
        <p className="text-red-500 relative ">
          {<AiFillDislike size={18} />}
          <span className="absolute left-5 top-0 z-50 text-red-300">
            {dislikes}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

