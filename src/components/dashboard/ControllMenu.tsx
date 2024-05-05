import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import Link from 'next/link';

const ControllMenu = ()  =>   {
  return (
    <aside className="max-w-[360px] w-fit  h-full rounded-md border py-8 text-left px-4 bg-neutral-200 m-2 z-50">
        <Link href='/dashboard'>
      <div className='bg-neutral-950 px-2 py-2 rounded text-white flex items-center space-x-2'>
        <MdOutlineDashboard />
        <h3>Dashboard</h3>
      </div>
        </Link>
      <ul>
        <Link href='/dashboard/profile'>
          <li className='p-2 hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-1 flex items-center space-x-2'>
            <AiOutlineProfile className='mr-2' />
            Profile
          </li>
        </Link>
        <Link href='/dashboard/write'>
          <li className='p-2 hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-1 flex items-center space-x-2'>
            Write 
          </li>
        </Link>
        <Link href='/dashboard/setting'>
          <li className='p-2 hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-1'>
            Settings
          </li>
        </Link>
        <Link href='/dashboard/analytics'>
          <li className='p-2 hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-1'>
            Analytics
          </li>
        </Link>
        <Link href='/dashboard/inbox'>
          <li className='p-2 hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-1'>
            Inbox
          </li>
        </Link>

          <li className='p-2 hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-1'>
            Logout
          </li>
      </ul>
    </aside>
  );
}

export default ControllMenu;
