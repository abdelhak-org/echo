'use client'
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { User  } from "@/types/interfaces";
import ProfileCard from "@/components/profile/ProfileCard";

interface Session {
  user :User;
  status :string ;
  update :()=> void; 
  expires?:number
}

const Page =  () => {
const {  data:session  , status , update }  = useSession()
 const [user, setUser] = useState<User>({} as User)
 const [url , setUrl] = useState<string>("")

 useEffect(() => {
  if(session && session.user) 
    {
      setUser(session.user as User)
      setUrl(session.user.src  as string )
    }
}, [session , url])




  const { userId , src , image } = user;
  console.log(user , "[user is :]")

  return (
    <div className="w-full h-full py-12 flex flex-col items-center justify-center rounded-md">
          
          <ProfileCard 
          url ={url as string}
          userId ={userId as string}
          setUrl ={setUrl as ()=> void} 
          update ={update as ()=> void}
          image = {image as string}
          imgType  ="profile"
          
          />
          
      <div className="w-full h-fit flex flex-col space-y-4 py-4 text-inherit my-12 border rounded-md border-neutral-300 bg-white ">
        <ul className="w-full  px-8  mx-auto ">
    
          <li className="px-8 py-2 my-2 border border-transparent border-b-blue-300 flex "><span className="w-60 font-semibold">Full Name</span>  {user.userName}</li>
          <li className="px-8 py-2 my-2 border border-transparent border-b-blue-300 flex "><span className="w-60 font-semibold">Email</span> {user.email}</li>
          <li className="px-8 py-2 my-2 border border-transparent border-b-blue-300 flex "> <span className="w-60 font-semibold">Phone</span>  +49 814 85 48 22</li>
          <li className="px-8 py-2 my-2 border border-transparent border-b-blue-300 flex "><span className="w-60 font-semibold">Mobile</span> +49 176 174 55 45</li>
            <li className="px-8 py-2 my-2 border border-transparent border-b-blue-300  flex ">
              <span className="w-60 font-semibold">Adress</span>  Bay Area San Francisco CA
            </li>
        </ul>
     
      </div>
    </div>
  );
};

export default Page;
