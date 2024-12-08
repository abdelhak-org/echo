" use client ";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/types/interfaces"; // Import the 'Post' type from the appropriate module

const PostView = async ({ params }: { params: { id: string } }) => {
  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
      const data = await res.json();
      return data.post;
    } catch (error: any) {
      console.error(error);
    }
  };
  const post: Post = await fetchPost();
  return (
    <article className="w-full grow px-4 py-8 ">
      <div className="w-[802px]  mx-auto  my-4 px-2   ">
        <h3 className=" w-full text-2xl font-bold capitalize  mx-auto  font-sans text-neutral-900 dark:text-neutral-200">
          {post?.title}
        </h3>
        <p className="text-sm font-light font-sans capitalize my-8 mx-auto w-fit text-neutral-900/80 dark:text-neutral-500">
          {post?.description}
        </p>
      </div>

      <div className="w-[670px] h-fit mx-auto relative  px-2 flex items-center">
        <Avatar className="mr-4">
          <AvatarImage
            src={
              post?.author?.src ||
              "https://res.cloudinary.com/drxurev4o/image/upload/v1720356413/echo/profile/a7o6ebisscvkkzfrmnnu.jpg"
            }
            alt="@shadcn"
          />
          <AvatarFallback>{post.author.name}</AvatarFallback>
        </Avatar>
        <p>{post.author.name} </p>
        <p>{post.createdAt}</p>
      </div>
      <div className="w-[800px]   mx-auto my-8  overflow-hidden rounded-md">
        <img
          className="w-full    object-cover object-center rounded-md "
          src="https://res.cloudinary.com/drxurev4o/image/upload/v1732842119/gp6qclsknp2d0wsk50tv.jpg"
          alt="post Image"
          width={100}
          height={100}
        />
      </div>
      <div
        className="text-[15px]  font-normal text-neutral-900/80 mx-auto
        max-w-[800px] text-left font-sans"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
    </article>
  );
};

export default PostView;
