import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import { Edit3Icon } from 'lucide-react';

interface ProfileCardProps {
  url: string;
  userId: string;
  setUrl: () => void;
  update :()=> void
}

const ProfileCard = ({ url, userId, setUrl  , update}:ProfileCardProps) => {

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('userId', userId || '');
    const res = await fetch(`/api/register/${userId}/uploadimage`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    const newUrl = data.data.secure_url as string  ;
     update({src:newUrl })
    
  };

  return (
    <div className="w-60 h-60 rounded-full overflow-hidden p-2 bg-neutral-500 relative group flex justify-center items-center">
      <Image
        src={url || 'https://res.cloudinary.com/drxurev4o/image/upload/v1720356413/echo/profile/a7o6ebisscvkkzfrmnnu.jpg'}
        alt="profile"
        className="w-full h-full object-cover object-right rounded-full"
        width={100}
        height={100}
      />

      <label className="group w-full h-full absolute top-0 left-0 flex items-center justify-center">
        <div className="flex-col items-center justify-center pt-5 pb-6 hidden group-hover:flex cursor-pointer text-white">
          <Edit3Icon size={26} />
          <p className="mb-2 text-sm text-neutral-100">
            <span className="font-semibold">Click to Edit</span>
          </p>
          <p className="text-xs text-inherit">SVG, PNG, JPG or GIF</p>
        </div>

        <input className="hidden" type="file" onChange={onChangeHandler} />
      </label>
    </div>
  );
};

export default ProfileCard;
