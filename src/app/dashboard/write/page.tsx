
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
        content :content
      }
      addPost(data)
      .then((res)=>{
        setTitle('')
        setContent('')
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
       handleContentChange  = {(newContent:any)=> handleContentChange(newContent)}
     />
      
      
    </div>
    </form>
     </div>
  )
}
