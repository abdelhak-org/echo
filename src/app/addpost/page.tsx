"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ToastContainer } from "react-toastify";

const FormSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters." }),
  post: z
    .string()
    .min(10, {
      message: "Post  must be at least 100 characters.",
    })
    .max(1600, {
      message: "Post must not be longer than 30 characters.",
    }),
});

const  TextareaForm =() =>{
  const { quill, quillRef } = useQuill();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      post: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    form.reset();
  }

  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col ">
      <div style={{ width: 500, height: 300 }}>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 mx-auto outline-none font-mono"
        >
          <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem>
                <FormLabel>add Post </FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full min-h-60 bg-neutral-200  text-xl   border-transparent focus:ring-0  py-3 px-4  
                        focus:ring-neutral-200 focus:ring-opacity-40 focus:ring-offset-0 
                        focus:border-neutral-300 focus:ring-offset-white
                        border-[1px] text-neutral-900"
                    placeholder="Write your post here..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
          <ToastContainer />
        </form>
      </Form>
    </section>
  );
}
export default TextareaForm;
