import PostCard from "@/components/PostCard";
import { Post } from "@/types/interfaces";
import Link from "next/link";
import { POST } from "../api/register/[id]/uploadimage/route";
export const getData = async (perPage: number, page: number) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/posts/?page=${page}&&limit=${perPage}`,{method:'GET'}
    )
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

const Articles = async (searchParams: any) => {
  let page = parseInt(searchParams.searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  let perPage = 2;
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  const data = await getData(perPage, page);
  const totalPages = Math.ceil(data.count / perPage);
  //
  const pageNumbers = [];
  const offsetNumber = 2;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <section className="max-w-[1080px]  w-full grow mx-auto pt-0 px-2 py-8 relative z-50">
      <div className="w-full grow py-4">
        {data.posts?.map((post: Post, index: number) => (
          <PostCard
            key={index}
            id={post._id.toString()}
            title={post.title}
            description={post.description}
            content={post.content}
            createdAt={post.createdAt}
            likes={post.likes}
            author ={post.author}
          />
        ))}
       
      </div>
      <div className="w-full h-16 flex justify-end space-x-4 items-center px-12 bg-slate-800 h-12 text-white text-center">
          {page === 1 ? (
            <div className="opacity-60" aria-disabled="true">
              Previous
            </div>
          ) : (
            <Link href={`?page=${prevPage}`} aria-label="Previous Page">
              Previous
            </Link>
          )}

          {pageNumbers.map((pageNumber, index) => {
            return (
              <Link className="px-1 " key={index} href={`?page=${pageNumber}`}>
                {pageNumber}
              </Link>
            );
          })}

          {page === totalPages ? (
            <div className="opacity-60" aria-disabled="true">
              Next
            </div>
          ) : (
            <Link href={`?page=${nextPage}`} aria-label="Next Page">
              Next
            </Link>
          )}
        </div>
    </section>
  );
};

export default Articles;
