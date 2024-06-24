 'use client'

import { ChangeEvent, FormEvent, useState } from "react";

export default function ImageUploader() {
const [file , setFile] = useState<File | null>(null);


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const imageFile = e.target.files[0] as  unknown as File;
    if (!imageFile) {
      return;
    }
    setFile(imageFile);
  }

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      console.log('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/uplaodimage', {
      method: 'POST',
      body: formData,
    });
    return response.json();
  };

  return (
    <div className="w-60 h-60 mx-auto flex flex-col space-y-4 bg-neutral-200 rounded-md p-2">
      <form onSubmit={handleSubmit}>
        <input 
        type="file" 
        name="image" 
        onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
