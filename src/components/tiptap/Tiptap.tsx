"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
interface TiptapProps {
  content: string;
  handleContentChange: (content: string) => void;

}
const Tiptap = ({ content, handleContentChange }:TiptapProps) => {

  const editor = useEditor({
    extensions: [StarterKit  ],
    editorProps: {
      attributes: {
        class:"flex flex-col p-4   text-neutral-700  w-full  outline-none  tracking-wide font-sans  text-[15px] ",
      },
    },
    onUpdate: ({ editor }) => {
      handleContentChange(editor.getHTML());
    },
  });
  return (
    <div className=" w-full grow flex flex-col space-y-4  border-none   ">
      <ToolBar editor={editor} content={content} />
      <EditorContent 
      editor={editor}
       style={{ 
        whiteSpace: "pre-line" ,
        backgroundColor:"white",
        borderRadius:"8px" ,
         border:"1px solid  #ccc",
         overflow:"wrap",
           minHeight:"200px",
         
         }} />
    </div>
  );
};

export default Tiptap;
