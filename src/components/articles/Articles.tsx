import PostCard from "../PostCard";
import { Post } from "@/types/interfaces";


 async function getPosts() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();
  return posts.data;
 };


const Articles  = async () => {
    
  const posts = await getPosts();
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
