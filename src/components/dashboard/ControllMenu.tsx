import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { SiWritedotas , SiGoogleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const ControllMenu = () => {
  const items = [
    {
      icon: <AiOutlineProfile size={22} />,
      title: "Profile",
      link: "/dashboard/profile",
    },
    {
      icon: <SiWritedotas size={22} />,
      title: "Write",
      link: "/dashboard/write",
    },
    {
      icon: <IoSettingsOutline  size={22}/>,
      title: "Settings",
      link: "/dashboard/setting",
    },
    {
      icon: <SiGoogleanalytics size={22} />,
      title: "Analytics",
      link: "/dashboard/analytics",
    },
    {
      icon: <MdOutlineEmail size={22} />,
      title: "Inbox",
      link: "/dashboard/inbox",
    },
  
  ];
  return (
    <aside className="max-w-[360px] min-w-[220px] grow  rounded-md border py-8 text-left px-4 bg-neutral-200 m-2 z-50">
        <div className="bg-neutral-950 px-2 py-3 rounded text-white flex items-center space-x-2">
          <FaHome size={24} />
          <h3 className="font-semibold">Dashboard</h3>
        </div>
      <ul>
        {items.map((item, index) => {
          return (
            <li 
            key={index}
            className="px-2 py-3  hover:bg-neutral-950 hover:text-white rounded-md cursor-pointer my-2 flex items-center space-x-4">
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
