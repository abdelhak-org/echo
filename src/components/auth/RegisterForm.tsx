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

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

 export  type RegisterCredentials = z.infer<typeof formSchema>;


const RegisterForm = () => {
  const Router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });
    
    const handleRegister  = async (data :RegisterCredentials)=>{
    try {
      const response = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
      toast.success("Account Created Successfully");
       Router.push("/login");
      } else {
        toast.error("Account Creation Failed");
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error:any) {
      console.error(error);
    }
    
    }

  function onSubmit(values:RegisterCredentials) {
    handleRegister(values)
    
  }


  return (
    <div  className="
    
    flex justify-center items-center flex-col  shadow-md dark:bg-neutral-950  
    border p-8 rounded-md border-neutral-300 w-[760px]  bg-neutral-100 ">
      <h4 className="text-black text-center  text-3xl font-sans underline font-bold my-2  dark:text-neutral-100  ">Sign up </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 font-roboto w-full ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-900 dark:text-neutral-300 text-xl ">Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full bg-neutral-200  text-xl   border-transparent focus:ring-0  py-3 px-4 h-12
                    focus:ring-neutral-200 focus:ring-opacity-40 focus:ring-offset-0 
                      focus:border-neutral-300 focus:ring-offset-white
                    border-[1px] text-neutral-900"
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
                <FormLabel className="text-neutral-700 dark:text-neutral-300 text-xl">Password</FormLabel>
                <FormControl>
                  <Input
                     className="w-full bg-neutral-200  text-xl   border-transparent focus:ring-0  py-3 px-4  h-12
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
          <Button className="font-semibold w-full text-lg py-3 px-4" size="lg"  type="submit">
            Submit
          </Button>
        </form>
      </Form>
       <div className="w-full flex justify-center items-center mt-2 space-x-2 font-roboto">
      <p className="text-center text-sm text-neutral-800 dark:text-neutral-200">You have an Account</p> 
      <span
      onClick={()=> Router.push("/login")}
      className="text-blue-500  cursor-pointer ">click here</span>

       </div>
       <ToastContainer />

    </div>
  );
};

export default RegisterForm;