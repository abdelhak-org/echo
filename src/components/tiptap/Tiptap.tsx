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
        class:" flex flex-col px-4 py-3 justify-start  border-b border-r border-l border-gray-100 text-gray-700 items-start w-full min-h-60  gap-3 font-medium text-[16px] pt-4 rounded-bl-md outline-none  ",
      },
    },
    onUpdate: ({ editor }) => {
      handleContentChange(editor.getHTML());
    },
  });
  return (
    <div className=" w-full h-fit flex flex-col space-y-8 p-4 border-none ">
      <ToolBar editor={editor} content={content} />
      <EditorContent 
      editor={editor}
       style={{ 
        whiteSpace: "pre-line" ,
        backgroundColor:"white",
        borderRadius:"8px" ,
         border:"1px solid  #ccc",
         overflow:"wrap",
          
         
         }} />
    </div>
  );
};

export default Tiptap;
