'use client'

import Tiptap from "./Tiptap"
import { useState } from "react"
import './style.css'


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

const PostPicker = () => {
    const [content, setContent] = useState<string>('')
    const handleContentChange = (content: any) => {
      setContent(content)
    }
    
    
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const data = {
        title :"this is just a test",
        content :content
      }
      addPost(data)
    }
    
    
  return (
    <form
    onSubmit={handleSubmit}
    className='max-w-3xl w-full grid place-items-center pt-10 mb-10'>

    <Tiptap 
      content ={content} 
      handleContentChange  = {(newContent:any)=> handleContentChange(newContent)}
    />

    </form>
  )
}

export default PostPicker
