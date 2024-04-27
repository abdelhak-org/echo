import clientPromise from "@/lib/mongodb";
import PostCard from "../PostCard";
import { Post, Posts } from "@/types/interfaces";
import { getPosts } from "@/actions/posts";




const Articles  = async () => {
    
  const posts = await getPosts();
  console.log("articles", posts )
  return (
    <section className="max-w-[1534px] min-h-screen mx-auto  px-8 py-12">
      {
       posts?.map((post:Post, index:number ) => (
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
