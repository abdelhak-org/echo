import React from "react";
import { type Editor } from "@tiptap/core";
import { BubbleMenu ,FloatingMenu} from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Heading2,
  Quote,
  Undo,
  Redo,
  Code,
  ImageIcon,
  PenIcon,
  Trash2,
} from "lucide-react";

const ToolBar = ({
  editor,
  content
}: {
  editor: Editor | null;
  content: string;
}) => {
  if (!editor) return null;

  return (
    <>  
      <div
        className="flex w-full h-fit  justify-left items-center  flex-row space-x-8
        border border-gray-700  bg-black  px-4 py-2 rounded-tl-md rounded-tr-md "
      >
          <button
          onClick={(e) => {
            e.preventDefault();
            editor.commands.setParagraph();
            console.log(editor.getHTML())
          }}
          className={
            editor.isActive("paragraph")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <PenIcon className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-gray-700 text-white  p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <Bold className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <Italic className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <Strikethrough className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <List className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading",{level:2})
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <Heading2 className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <Quote className=" w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <Undo className="w-5 h-5 " />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <Redo className="w-5 h-5 " />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            let url;
            editor.commands.setImage({
              src: prompt("url :" ,url) as string,
              alt: "image-title",
              
            });
          }}
          className={
            editor.isActive("setimage")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200 text-white p-2 rounded-lg"
          }
        >
          <ImageIcon className="w-5 h-5 " />
        </button>
        <button 
        onClick={(e)=>{
          e.preventDefault();
          editor.commands.clearContent()



        }}
        className={
          editor.isActive("setimage")
            ? "bg-gray-700 text-white p-2 rounded-lg"
            : " text-gray-200 text-white p-2 rounded-lg"
        }
        >
          <Trash2 size={18}/>
        </button>
      
      </div>



  
    
    
    </>

      
    
  );
};

export default ToolBar;
