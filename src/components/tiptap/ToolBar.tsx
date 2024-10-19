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
} from "lucide-react";

const ToolBar = ({
  editor,
  content,
}: {
  editor: Editor | null;
  content: string;
}) => {
  if (!editor) return null;

  return (
    <>
    
     
{    //  <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
}    
      <div
        className="flex w-full h-fit my-2 justify-between  flex-rows 
          gap-5 w-full flex-wrap border border-gray-700 p-2 bg-gray-800
         px-4 py-3 rounded-tl-md rounded-tr-md "
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-400"
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
              : " text-gray-400"
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
              : " text-gray-400"
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
              : " text-gray-400"
          }
        >
          <List className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-400"
          }
        >
          <ListOrdered className="w-5 h-5 " />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-400"
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
              : " text-gray-400"
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
              : " text-gray-400"
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
              : " text-gray-400"
          }
        >
          <Redo className="w-5 h-5 " />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.commands.setImage({
              src: "https://res.cloudinary.com/drxurev4o/image/upload/v1723048633/echo/profile/ddvgzyxovtsxhjztw9bf.jpg",
              alt: "image title",
              title: "image title",
            });
          }}
          className={
            editor.isActive("setimage")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-400"
          }
        >
          <ImageIcon className="w-5 h-5 " />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.commands.setParagraph();
          }}
          className={
            editor.isActive("paragraph")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-400"
          }
        >
          <PenIcon className="w-5 h-5 " />
        </button>
      </div>
{ //   </FloatingMenu>
}     


  
    
    
    </>

      
    
  );
};

export default ToolBar;
