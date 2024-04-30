
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
    <div  className=" w-full min-h-full  space-y-4   bg-neutral-200 rounded-md p-8 ">

    <h1 className="text-2xl font-bold text-center tracking-wide">Write a new Post</h1>
    <form onSubmit={handleSubmit}>
    <div className="grid w-full  items-center gap-1.5">
      <Label htmlFor="title">Title</Label>
      <Input
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      className=" w-full"
      type="text" id="title" placeholder="write a Title" />
    </div>
    <div className="grid w-full  items-center gap-1.5">
      <Label htmlFor="title">Description</Label>
      <Input
      className=" w-full"
      type="text" id="description" placeholder="write a Description" />
    </div>
    <div className="grid w-full  items-center gap-1.5">
      <Label htmlFor="post">Post</Label>
      <Tiptap
       content ={content} 
       handleContentChange  = {(newContent:any)=> handleContentChange(newContent)}
     />
      
      
    </div>
    </form>
     </div>
  )
}
