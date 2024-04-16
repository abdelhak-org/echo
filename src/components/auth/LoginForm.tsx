"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";

import { NextPage } from "next";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginCredentials = z.infer<typeof formSchema>;

const LoginForm: NextPage = () => {
  const Router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: LoginCredentials) => {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res.ok) {
        Router.push("/dashboard");
      } else {
        toast("INVALID CREDENTIALS");
      }
     
    } catch (error:any) {
     toast("SERVER ERROR");
    }
  }
  const notify = () => toast("Wow so easy !");

  return (
    <div className=" flex justify-center items-center flex-col
    border p-8 rounded-md border-neutral-300 w-[760px]  bg-neutral-100">
      <h4 className="text-black  text-center font-sans   text-3xl underline ">
        Sign in {" "}
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 font-mono w-full ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-900 dark:text-neutral-300 text-xl ">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-full bg-neutral-200  text-lg outline--none  border-0  
                     text-neutral-900 px-4 py-3 focus:ring-offset-0 focus:border-neutral-300
                     
                     "
                    placeholder="Enter your Email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-900 dark:text-neutral-300 text-xl ">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                  className="w-full bg-neutral-200  text-xl   border-transparent focus:ring-0  py-3 px-4  
                  focus:ring-neutral-200 focus:ring-opacity-40 focus:ring-offset-0 
                    focus:border-neutral-300 focus:ring-offset-white
                  border-[1px] text-neutral-900"
                    placeholder="Enter your Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className=" w-full text-xl font-bold py-4  "
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
      <div className="w-full flex justify-center items-center mt-2 space-x-2 font-roboto">
        <p className="text-center text-sm text-neutral-800 ">
          You do Not have an Account
        </p>
        <span
          onClick={() => Router.push("/register")}
          className="text-blue-600  cursor-pointer "
        >
          click here
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
