"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent} from "@tiptap/react";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";
import History from "@tiptap/extension-history";
import Image from "@tiptap/extension-image";
import BulletList from '@tiptap/extension-bullet-list'
import ToolBar from "./ToolBar";
interface TiptapProps {
  content: string;
  handleContentChange: (content: string) => void;
}
const Tiptap = ({ content, handleContentChange }: TiptapProps) => {
  const [isEditable, setIsEditable] = React.useState(true)


  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "my-2 text-[15px] indent-1",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class:"",
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
          class: "",
        },
      }),
      BulletList.configure({
        itemTypeName: 'listItem',
        HTMLAttributes: {
          class: '',
        },
      })
      
    ],

    editorProps: {
      attributes: {
        class:
          "",
      },
    },
    onUpdate: ({ editor }) => {
      handleContentChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <div className=" w-full h-full   flex flex-col    ">
    

      <ToolBar editor={editor} content={content}  />
    
       <EditorContent
        editor={editor}
        style={{
          whiteSpace: "pre-line",
          backgroundColor: "white",
          borderRadius: "0px 0px 8px 8px",
          border: "1px solid  #ccc",
          overflow: "wrap",
          minHeight: "240px",

        }}
        />
    </div>
  );
};

export default Tiptap;
