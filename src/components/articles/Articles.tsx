"use client";
import {  useEffect , useState } from "react";
import PostCard from "../PostCard";
import { Post } from "@/types/interfaces";
const Articles  = () => {
    const [articles, setArticles] = useState([]) as [Post[], Function];
    useEffect(() => {
        fetch("http://localhost:3000/api/posts")
            .then((response) => response.json())
            .then((data) => setArticles(data.data));
    }, []); 
  return (
    <section className="max-w-[1534px] mx-auto  px-8 ">
      {
       articles.map((post:Post , index) => (
        <PostCard
        key={index}
        title={post.title}
        content={post.content}
        author="johni johni"
        id={post._id.toString()}
      />
       ))
      }
    </section>
  )
}

export default Articles
