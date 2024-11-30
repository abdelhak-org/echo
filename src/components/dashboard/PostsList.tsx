"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Post } from "@/types/interfaces";
import { useEffect, useState } from "react";

const PostsList = () => {
  const [userPosts, setUserPosts] = useState([]);

  const getUserPost = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users/userPosts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserPosts(data.posts);
    } catch (error) {}
  };
  useEffect(() => {
    getUserPost();
  }, [userPosts]);
  return (
    <div>
      {userPosts?.map((post: Post, index: number) => {
        return (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="bg-white dark:bg-neutral-700 hover:bg-gray-200 px-8 my-2 border rounded-md border-gray-300"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>{post?.title as string} </AccordionTrigger>
              <AccordionContent>{post?.description as string}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export default PostsList;
