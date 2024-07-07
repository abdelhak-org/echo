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
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  userId :z.string() ,
  title: z.string(),
  description: z.string(),
  content: z.string(),
});

export type   postSchema  = z.infer<typeof formSchema>;

const page = () => {

  const {data:session , status } =  useSession()
  const Router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      userId : "" ,
      title: "",
      description: "",
      content: "",
    },
    resolver: zodResolver(formSchema),
  });

  const handlePost = async (data: postSchema  ) => {
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

  async function submitHandler(values: postSchema) {
    try {
      if (!session) throw new Error("user must be loged in  in ") ;
  
      const postData = {...values , userId:session?.user?.userId }
            await handlePost(postData);
            form.reset();
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
      <ToastContainer style={{position:"absolute" , right:"16px"}}/>
    </div>
  );
};

export default page;

