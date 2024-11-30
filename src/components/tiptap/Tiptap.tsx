"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Blockquote from "@tiptap/extension-blockquote";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Strike from "@tiptap/extension-strike";
import History from "@tiptap/extension-history";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";

import ToolBar from "./ToolBar";
interface TiptapProps {
  content: string;
  handleContentChange: (content: string) => void;
}
const Tiptap = ({ content, handleContentChange }: TiptapProps) => {
  const [isEditable, setIsEditable] = React.useState(true);

  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Blockquote,
      Bold,
      Italic,
      History,
      Paragraph.configure({
        HTMLAttributes: {
          class: "tiptap-paragraph",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: "tiptap-heading",
        },
      }),
      Strike,
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: "tiptap-img ",
        },
      }),
      ListItem,
      BulletList.configure({
        itemTypeName: "bulletList",
        HTMLAttributes: {
          class: "tiptap-list",
        },
      }),
      Dropcursor,
    ],
    /// editor props
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none p-4",
      },
    },
    onUpdate: ({ editor }) => {
      handleContentChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  return (
    <div className=" w-full h-full   flex flex-col    ">
      <ToolBar editor={editor} content={content} />

      <EditorContent
        editor={editor}
        style={{
          whiteSpace: "pre-line",
          backgroundColor: "white",
          borderRadius: "0px 0px 8px 8px",
          border: "1px solid  #eee",
          overflow: "wrap",
          minHeight: "240px",
        }}
      />
    </div>
  );
};

export default Tiptap;
