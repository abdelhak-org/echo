import React from "react";
import { type Editor } from "@tiptap/core";
import { BubbleMenu } from "@tiptap/react";
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
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <div
        className="flex justify-between  flex-rows 
          gap-5 w-fit flex-wrap border border-gray-700 p-2 bg-gray-900
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
          <Quote className="w-5 h-5 " />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-gray-700 text-white p-2 rounded-lg"
              : " text-gray-400"
          }
        >
          <Code className="w-5 h-5 " />
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
      
     
      </div>
    </BubbleMenu>
  );
};

export default ToolBar;
