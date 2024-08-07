import PostCard from "../PostCard";
import { Post } from "@/types/interfaces";
import { getPosts } from "@/actions/posts";
import logo from "../../../public/logo1.jpg";
import Image from "next/image";

const Articles = async () => {
  const posts = await getPosts();
  
  return (
    <section className="max-w-[1080px] w-full mx-auto pt-0 px-2 py-8 relative z-50">
      <div className="mx-auto max-w-2xl lg:text-center py-12 flex flex-col">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="mx-auto rounded-full"
        />

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Articles
        </h2>
      </div>

      <div className="w-full h-fit py-4">
        {posts?.map((post: Post, index: number) => (
          <PostCard
            key={index}
            id={post._id.toString()}
            title={post.title}
            description={post.description}
            content={post.content}
            createdAt={post.createdAt}
            likes={post.likes}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
