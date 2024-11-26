import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import   {getPostsByUserId} from "@/actions/posts"
import { deletePost } from "@/actions/posts"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {  Trash2 } from "lucide-react"

const page =async () => {
  const session =await getServerSession(authOptions);
  const user = session?.user as string
  const posts = await getPostsByUserId(user?.userId)
  return (
    <section
    className="w-full grow py-24  overflow-scroll p-4 "
    >
       <h2
    className="font-bolder font-serif text-2xl pl-4 my-8 underline-offset-4 underline "
    >Profile Infos </h2>

    <Table 
    className=" p-4 border border-neutral-200 rounded-md  "
    >
 
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">User</TableHead>
      <TableHead>email</TableHead>
      <TableHead>Roll</TableHead>
      <TableHead className="text-right">articles</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">{user.userName  }</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>author  </TableCell>
      <TableCell
      className="text-right"
      >{posts.length}</TableCell>

    </TableRow>
  </TableBody>
</Table>
    <h2
    className="font-bolder font-serif text-2xl pl-4 my-8 underline-offset-4 underline "
    >Articles</h2>

    {
       posts?.map((post , index)=>{
           return(
           
            <Accordion
            key={index}
            type="single" collapsible 
            className="bg-white dark:bg-neutral-700 hover:bg-gray-200 px-8 my-2 border rounded-md border-gray-300"
            >
            <AccordionItem 
            value="item-1">
            <AccordionTrigger>{post.title} </AccordionTrigger>
            <AccordionContent >
{              post.description as string
}            

           
            </AccordionContent>
            </AccordionItem>
            </Accordion>

           )
      })
    }

   

    </section>
  )
}

export default page












/**
 * 
 * 
import {v2 as cloudinary} from 'cloudinary';

(async function() {
  
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Upload an image
const uploadResult = await cloudinary.uploader.upload("https://res.cloudinary.com/profile/image/upload/getting-started/shoes.jpg", {
  public_id: "shoes"
}).catch((error)=>{console.log(error)});

console.log(uploadResult);

// Optimize delivery by resizing and applying auto-format and auto-quality
const optimizeUrl = cloudinary.url("shoes", {
  fetch_format: 'auto',
  quality: 'auto'
});

console.log(optimizeUrl);

// Transform the image: auto-crop to square aspect_ratio
const autoCropUrl = cloudinary.url("shoes", {
  crop: 'auto',
  gravity: 'auto',
  width: 500,
  height: 500,
});

console.log(autoCropUrl);    
})();

*/
