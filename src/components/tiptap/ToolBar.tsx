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
      <div
        className="flex w-full h-fit  justify-between  flex-rows 
          gap-5 w-full flex-wrap border border-gray-700 p-2 bg-black 
         px-4 py-3 rounded-tl-md rounded-tr-md "
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-gray-700 text-white  p-2 rounded-lg"
              : " text-gray-200"
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
              : " text-gray-200"
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
              : " text-gray-200"
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
              : " text-gray-200"
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
              : " text-gray-200"
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
              : " text-gray-200"
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
              : " text-gray-200"
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
              : " text-gray-200"
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
              : " text-gray-200"
          }
        >
          <Redo className="w-5 h-5 " />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.commands.setImage({
              src: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg",
              alt: "image-title",
              title: "image title",
            });
          }}
          className={
            editor.isActive("setimage")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-200"
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
              : " text-gray-200"
          }
        >
          <PenIcon className="w-5 h-5 " />
        </button>
      </div>


  
    
    
    </>

      
    
  );
};

export default ToolBar;
