' use client '
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/types/interfaces"; // Import the 'Post' type from the appropriate module


const PostView = async ({ params }: { params: { id: string } }) => {
    const fetchPost = async () => {
    try {
  
        const res = await fetch(`http://localhost:3000/api/posts/${params?.id}`);
        const data = await  res.json();
        return data.post;
      
    } catch (error: any) {
      console.error(error);
    }
    };
    const post:Post  = await fetchPost();
    return (
    <article className="w-full grow px-4 py-8">

      <div className="w-[670px]  mx-auto  my-4 px-2 ">
        <h3 className=" w-full text-2xl font-bold capitalize  mx-auto  font-sans text-neutral-900">
          {post?.title}
        </h3>
        <p className="text-sm font-light font-sans capitalize my-8 mx-auto w-fit text-neutral-900/80">
          {post?.description}
        </p>
      </div>

      <div className="w-[670px] h-fit mx-auto relative  px-2 flex items-center">
        <Avatar className="mr-4">
          <AvatarImage src={post?.author?.src|| 'https://res.cloudinary.com/drxurev4o/image/upload/v1720356413/echo/profile/a7o6ebisscvkkzfrmnnu.jpg' } alt="@shadcn" />
          <AvatarFallback>{post.author.name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[800px] h-60  mx-auto my-8  overflow-hidden rounded-md">
        <img
          className="w-full    object-cover object-center rounded-md "
          src="https://res.cloudinary.com/drxurev4o/image/upload/v1719504845/mobile-info/photo-1718907008648-aa9801d2b5e1_eloejh.jpg"
          alt="post Image"
          width={100}
          height={100}
        />
      </div>
       <div
        className="text-[15px] index-2 font-normal text-neutral-900/80 mx-auto
        max-w-[800px] text-left font-sans"
        
       dangerouslySetInnerHTML={{__html:post?.content}}
       />

       
      
       
      
          
        
    </article>
  );
};

export default PostView;
