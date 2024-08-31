"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";
import History from "@tiptap/extension-history";
import Image from "@tiptap/extension-image";
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import ToolBar from "./ToolBar";
interface TiptapProps {
  content: string;
  handleContentChange: (content: string) => void;
}
const Tiptap = ({ content, handleContentChange }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "my-2 text-[15px]  text-gray-800 indent-1",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class:"text-[18px] font-bold tracking-wide text-gray-900 font-sans font-bold",
        },
      }),
      Strike,
      History.configure({
        depth: 10,
        newGroupDelay: 1000,
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: "w-60  h-auto mx-auto",
        },
      }),
      BulletList.configure({
        itemTypeName: 'listItem',
        HTMLAttributes: {
          class: 'p-2 ',
        },
      })
      
    ],

    editorProps: {
      attributes: {
        class:
          "flex flex-col p-4   text-neutral-700  w-full  outline-none  tracking-wide font-sans  text-[15px] ",
      },
    },
    onUpdate: ({ editor }) => {
      handleContentChange(editor.getHTML());
      const jsonFile = editor.getJSON();
    },
  });
  return (
    <div className=" w-full grow flex flex-col space-y-4  border-none   ">
      <ToolBar editor={editor} content={content} />
      <EditorContent
        editor={editor}
        style={{
          whiteSpace: "pre-line",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "1px solid  #ccc",
          overflow: "wrap",
          minHeight: "200px",
        }}
      />
    </div>
  );
};

export default Tiptap;
