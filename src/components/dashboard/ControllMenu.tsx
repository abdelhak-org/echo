import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import Link from "next/link";

const ControllMenu = () => {
  const items = [
    {
      icon: <AiOutlineProfile />,
      title: "Profile",
      link: "/dashboard/profile",
    },
    {
      icon: <AiOutlineProfile />,
      title: "Write",
      link: "/dashboard/write",
    },
    {
      icon: <AiOutlineProfile />,
      title: "Settings",
      link: "/dashboard/setting",
    },
    {
      icon: <AiOutlineProfile />,
      title: "Analytics",
      link: "/dashboard/analytics",
    },
    {
      icon: <AiOutlineProfile />,
      title: "Inbox",
      link: "/dashboard/inbox",
    },
    {
      icon: <AiOutlineProfile />,
      title: "Logout",
      link: "/auth/login",
    },
  ];
  return (
    <aside className="max-w-[360px] min-w-[220px] grow  rounded-md border py-8 text-left px-4 bg-neutral-200 m-2 z-50">
      <Link href="/dashboard">
        <div className="bg-neutral-950 px-2 py-2 rounded text-white flex items-center space-x-2">
          <MdOutlineDashboard />
          <h3>Dashboard</h3>
        </div>
      </Link>
      <ul>
        {items.map((item, index) => {
          return (
            <li className="p-2 hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-1 flex items-center space-x-3">
              {item.icon}
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ControllMenu;
