
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
import { AiFillLike } from "react-icons/ai";
import { Post } from "@/types/interfaces";

const PostCard = ({
  id,
  title,
  description,
  content,
  createdAt = new Date().toLocaleString(),
  likes = 10,
  author
}: Post) => {
  return (
    <div className="w-full max-w-[1534px] md:min-h-[270px] flex flex-col md:flex-row overflow-hidden dark:bg-neutral-900 rounded-md shadow-lg my-4 space-x-4">
      <div className="w-full md:w-1/5 h-full overflow-hidden rounded-md dark:bg-neutral-900">
        <img
          src="https://res.cloudinary.com/drxurev4o/image/upload/v1719504845/mobile-info/photo-1718907008648-aa9801d2b5e1_eloejh.jpg"
          alt="cardImg"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <Card className="w-full md:w-4/5 flex flex-col justify-between border dark:bg-neutral-900">
        <CardHeader>
          <CardTitle className="font-sans font-bold text-[18px] tracking-wide text-neutral-950 dark:text-neutral-200">
            <Link href={`http://localhost:3000/posts/${id}`}>{title}</Link>
          </CardTitle>
          <CardDescription>
            {description?.substring(0, 80) }
          </CardDescription>
          <div
          dangerouslySetInnerHTML={{ __html: content.split(" ").slice(0,80).join(" ")  }}
         >
        
          </div>
        </CardHeader>
        
        <CardContent
          
          className="text-[14px] w-full dark:text-neutral-300"
        >
      
               </CardContent>

        <CardFooter className="flex space-x-4">
          <Avatar>
            <AvatarImage
              src={author?.src }
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{createdAt.substring(0, 10)}</p>
          <p className="text-blue-500 relative px-2">
            <AiFillLike size={18} />
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
