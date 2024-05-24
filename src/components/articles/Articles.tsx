import PostCard from "../PostCard";
import { Post, Posts } from "@/types/interfaces";
import { getPosts } from "@/actions/posts";




const Articles  = async () => {
    
  const posts = await getPosts();
  return (
    <section className="max-w-[1080px] w-full mx-auto  p-4 ">
      {
        posts?.map((post:Post, index:number ) => (
        <PostCard
        key={index}
        id={post._id.toString()}
        title={post.title}
        description={post.description}
        content={post.content}
        createdAt={post.createdAt }
        likes={post.likes}
        dislikes={post.dislikes}
      />
        ))
      }
    </section>
  )
}

export default Articles
