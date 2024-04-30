'use client'

import { Loading } from '@/components/dashboard/Loading';
import { useSession } from 'next-auth/react';

const Page = () => {
  const { data: session, status } :{data:any , status :string  }= useSession();

  if (status === 'loading') {
    return <Loading/>;
  }


  return (
    <div className='h-full w-5/6 bg-neutral-200 rounded-md py-8'>
      <h1 className='text-3xl text-center my-8 font-bold tracking-wider'>Profile</h1>
      <ul className='w-3/6 rounded-md p-8 flex justify-start flex-col items-start border mx-auto'>
        <li>Username: </li>
        {status === 'authenticated' && <li>Email: {session.user.email}</li>}
        <li>Role: </li>
      </ul>
    </div>
  );
};

export default Page;
