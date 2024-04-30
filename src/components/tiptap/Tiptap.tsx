"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

const Tiptap = ({ content, handleContentChange }: any) => {
  const onContentChange = (newContent: any) => {
    handleContentChange(newContent);
  };

  const editor = useEditor({
    extensions: [StarterKit  ],
    editorProps: {
      attributes: {
        class:" flex flex-col px-4 py-3 justify-start  border-b border-r border-l border-gray-700 text-gray-700 items-start w-full min-h-60  gap-3 font-medium text-[16px] pt-4 rounded-bl-md outline-none  ",
      },
    },
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });
  console.log(content, "tiptap");
  return (
    <div className="w-full p-4 ">
      <ToolBar editor={editor} content={content} />
      <EditorContent editor={editor} style={{ whiteSpace: "pre-line" ,backgroundColor:"white"}} />
    </div>
  );
};

export default Tiptap;
