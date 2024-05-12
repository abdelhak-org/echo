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
  return  (
    <div className="w-full max-w-[1534px]  md:h-[270px] flex flex-col  md:flex-row  border overflow-hidden
     border-neutral-200 rounded-md shadow-md my-2 ">
      <div className="w.full  md:w-1/5 h-full overflow-hidden rounded-md ">
        <img src="https://source.unsplash.com/random" alt="cardImg" className="w-full h-full object-cover  rounded-md" />
      </div>
      <Card className="w-full md:w-4/5 flex flex-col justify-between border-0 ">
      <CardHeader className="">
        <CardTitle className="font-sans font-bold text-[18px] tracking-wide text-neutral-950 ">
          <Link href={`http://localhost:3000/posts/${id}`}>{title}</Link>
        </CardTitle>
        <CardDescription className="">
          {description?.substring(0,80) ||
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\n There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."}
        </CardDescription>
      
      </CardHeader>

      <CardContent
        dangerouslySetInnerHTML={{ __html: content.substring(0, 400) + "..."}}
        className="text-[14px] w-full  "
      />

      <CardFooter className=" flex space-x-4">
        <Avatar className="">
          <AvatarImage
            src="https://source.unsplash.com/random/35*35"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p> {createdAt.substring(0,10)}</p>
        <p className="text-blue-500 relative px-2 ">
          {<AiFillLike size={18} />}{" "}
          <span className="absolute left-8 top-0 z-50 text-blue-300">
            {likes}
          </span>
        </p>
        <p className="text-red-500 relative  px-2 ">
          {<AiFillDislike size={18} />}
          <span className="absolute left-8 top-0 z-50 text-red-300">
            {dislikes}
          </span>
        </p>
      </CardFooter>
    </Card>

    </div>
 
  );
};

export default PostCard;












/*
   <Card className="">
      <CardHeader className="">
        <CardTitle className="">
          <Link href={`http://localhost:3000/posts/${id}`}>{title}</Link>
        </CardTitle>
        <CardDescription className="">
          {description ||
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\n There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."}
        </CardDescription>
      </CardHeader>

      <CardContent
        dangerouslySetInnerHTML={{ __html: content }}
        className=""
      ></CardContent>

      <CardFooter className="">
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
 */