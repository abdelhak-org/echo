'use client'


import React, { useEffect, useState } from "react";
import { Posts, Post } from "@/types/interfaces";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { NextPage } from "next";

const Page: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts");
      const data = await res.json();
      const posts: Posts = data.data;
      setPosts(posts)
      ;

      setLoading(false);
    } catch (error:any) {
      setError(error);
      setLoading(false);
    }
  
  }
  useEffect(() => {
    fetchPosts()
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-[1534px] mx-auto">
      {posts?.map((post: Post, index) => (
        <PostCard
          key={index}
          title={post.title}
          content={post.content}
          author="johni johni"
          id={post._id.toString()}
        />
      ))}
    </div>
  );
};

export default Page;

