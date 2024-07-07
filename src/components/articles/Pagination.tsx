import React from 'react'
import  {useState , useEffect} from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Pagination = () => {
   const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);
    const [totalPosts, setTotalPosts] = useState(30);
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
      const fetchPosts = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/search?page=${currentPage}&&limit=${totalPages}`);
          const data = await response.json();
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          console.log(data.posts)
        } catch (error:any) {
          console.log(error.message)
        }
      };

       
    },[])
  return (
    <div className="  flex items-center justify-between border-t mt-12 border-neutral-200 bg-white px-4 py-3 sm:px-6">
    <div className="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        className="relative inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
      >
        Previous
      </a>
      <a
        href="#"
        className="relative ml-3 inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
      >
        Next
      </a>
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-neutral-700">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">5</span> of{" "}
          <span className="font-medium">100</span> results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
        
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-neutral-400 ring-1 ring-inset ring-neutral-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 focus:z-20 focus:outline-offset-0"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-neutral-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
            ...
          </span>
          <a
            href="#"
            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            10
          </a>
          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-neutral-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5"  />
          </a>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Pagination
