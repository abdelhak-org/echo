import PostCard from "../PostCard";
import { Post } from "@/types/interfaces";
import { getPosts } from "@/actions/posts";

const Articles = async () => {
  const posts = await getPosts();
  if (!posts) return null;

  return (
    <section className="max-w-[1080px] w-full mx-auto pt-0 px-2 py-8 ">
      <div className="mx-auto max-w-2xl lg:text-center py-12  flex justify-center items-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 
             sm:text-4xl underline underline-offset-8 font-serif ">
          Articles
        </h2>
      </div>
      <div className="w-full h-fit py-4 ">
        {posts?.map((post: Post, index: number) => (
          <PostCard
            key={index}
            id={post._id.toString()}
            title={post.title}
            description={post.description}
            content={post.content}
            createdAt={post.createdAt}
            likes={post.likes}
            author ={post.author || null}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
