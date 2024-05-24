"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import Tiptap from "@/components/tiptap/Tiptap";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  createdAt: z.string(),
});

export type RegisterCredentials = z.infer<typeof formSchema>;

const page = () => {
  const Router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
      description: "",
      content: "",
      createdAt: new Date().toString(),
    },
    resolver: zodResolver(formSchema),
  });

  const handlePost = async (data: RegisterCredentials) => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("post Added Successfully");
      } else {
        toast.error("Post Adding Failed");
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  async function submitHandler(values: RegisterCredentials) {
    try {
      const res = await handlePost(values);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="  flex space-y-4 flex-col  shadow-md dark:bg-gray-950 
    border p-4 rounded-md border-gray-300  "
    >
      <h4 className="text-black text-center  text-3xl font-sans underline font-bold   dark:text-gray-100 ">
        Write
      </h4>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="space-y-4  w-full "
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900 dark:text-gray-300 text-xl ">
                  Title :
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full bg-white text-xl   border border-gray-300  focus:ring-0  py-3 px-4 h-12
                    focus:ring-gray-200 focus:ring-opacity-40 focus:ring-offset-0 
                      focus:border-gray-300 focus:ring-offset-white
                  text-gray-900"
                    placeholder="Title ..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300 text-xl">
                    Description :
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full bg-white  text-xl   border border-gray-300 focus:ring-0  py-3 px-4  h-12
                     focus:ring-gray-200 focus:ring-opacity-40 focus:ring-offset-0 
                     focus:border-gray-300 focus:ring-offset-white
                      text-gray-900"
                      placeholder=" Description ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300 text-xl">
                    Post :
                  </FormLabel>
                  <FormControl>
                    <Tiptap
                      content={field.value}
                      handleContentChange={(newValue: string) =>
                        field.onChange(newValue)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="w-full h-fit flex justify-end ">
            <Button
              className="font-semibold  text-lg py-3 px-4 "
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default page;

/*
'use client'

import Tiptap from "@/components/tiptap/Tiptap"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const addPost = async (post: any) => {
  try {
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    return res.json()
  } catch (error) {
    console.log('error', error)
  }

}


export default function page() {

  const [content, setContent] = useState<string>('')
  const [title, setTitle] = useState<string>('')
    const handleContentChange = (content: any) => {
      setContent(content)
    }
    

    const handleSubmit = (e: any) => {
      e.preventDefault();
      const data = {
        title :title,
        description: "description",
        content :content, 
        createdAt : new Date(),
        likes : 0,
        dislikes : 0,
        
      }
      addPost(data)
      .then((res)=>{
        console.log(res)
        setTitle('')
        
      })
    }
    


  return (
    <div  className = " w-full max-w-[1534px] min-h-full mx-auto space-y-4   bg-neutral-300 rounded-md p-8 " >
    
    <h1 className="text-2xl font-light text-center tracking-wide font-sans  ">Write a new Post</h1>
    <form onSubmit={handleSubmit}>
    <div className=" w-full  items-start p-4 flex flex-col  space-y-4 ">
      <Label htmlFor="title">Title</Label>
      <Input
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      className=" w-full min-h-12"
      type="text" id="title" placeholder="  Title ... " />
    </div>
    <div className=" w-full  items-start p-4 flex flex-col  space-y-4 ">
      <Label htmlFor="title">Description</Label>
      <Input
      className=" w-full min-h-12"
      type="text" id="description" placeholder=" Description ..." />
    </div>
    <div  className=" w-full  items-start p-2 flex flex-col  space-y-2 ">

      <Label
      htmlFor="post">Post</Label>
      <Tiptap
       content ={content} 
       handleContentChange  = {(newContent:any)=> handleContentChange(newContent) }
     />
      
      
    </div>
    </form>
     </div>
  )
}
*/
