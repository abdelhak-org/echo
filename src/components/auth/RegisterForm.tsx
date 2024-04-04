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
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
       Router.push("/login");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error:any) {
      alert( error.message);
    }
    
    }

  function onSubmit(values:RegisterCredentials) {
    handleRegister(values)
    
  }


  return (
    <div className=" border p-8 rounded-md border-neutral-300 w-[660px] bg-neutral-100">
      <h4 className="text-neutral-800 text-center  text-xl ">Register </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-700 dark:text-neutral-300">Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full bg-neutral-200   border-transparent focus:ring-0 text-lg py-2 px-3  
                   focus:ring-neutral-200 focus:ring-opacity-40 focus:ring-offset-0 
                     focus:border-neutral-300 focus:ring-offset-white
                   border-[1px] text-neutral-800"
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
                <FormLabel className="text-neutral-700 dark:text-neutral-300">Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full bg-neutral-200   border-transparent focus:ring-0 text-lg py-2 px-3  
                      focus:ring-neutral-300 focus:ring-opacity-40 focus:ring-offset-0 
                      focus:border-neutral-300 focus:ring-offset-white
                      border-[1px] text-neutral-800"
                    placeholder="Enter your Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="font-semibold w-full text-lg" size="lg"  type="submit">
            Submit
          </Button>
        </form>
      </Form>
       <div className="w-full flex justify-center items-center mt-2 space-x-2">
      <p className="text-center text-sm text-neutral-800 ">You have an Account</p> 
      <span
      onClick={()=> Router.push("/login")}
      className="text-blue-500  cursor-pointer ">click here</span>

       </div>
    </div>
  );
};

export default RegisterForm;