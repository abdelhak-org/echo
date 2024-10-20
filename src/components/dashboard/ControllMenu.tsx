import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { SiWritedotas, SiGoogleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const ControllMenu = () => {
  const pathname = usePathname();

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
      icon: <IoSettingsOutline size={22} />,
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
    <aside className="w-full duration-200 transition-all  px-2  max-w-[260px] min-w-[220px] grow  rounded-md border py-8 text-left md:px-4 bg-neutral-200 m-2 z-50">
      <Link href="/dashboard">
        <div
        
        className={clsx(
          "px-2 py-3 grow hover:text-neutral-50 rounded-md cursor-pointer my-2 flex items-center space-x-4 ",
          {
            "bg-neutral-700 text-neutral-50": pathname === '/dashboard',
          }
        )}        
        >
          <FaHome size={24} />
          <h3 className="font-bold hidden md:block ">Dashboard</h3>
        </div>
      </Link>
        <ul>
          {items.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                  <li
                    key={index}
                    className={clsx(
                      "px-2 py-3 grow hover:text-neutral-50 rounded-md cursor-pointer my-2 flex items-center space-x-4 ",
                      {
                        "bg-neutral-700 text-neutral-50": pathname === item.link,
                      }
                    )}
                  >
                  <p>{item.icon} </p>
                  <span className="hidden md:block">{item.title}</span>
                </li>
              </Link>
            );
          })}
        </ul>
    </aside>
  );
};

export default ControllMenu;
