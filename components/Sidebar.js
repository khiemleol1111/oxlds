"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const SidebarItem = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <li key={item.href} className="relative text-sm">
      
      <Link
        href={item.href}
        onClick={toggleExpand}
        className={`${
          pathname === `${item.href}` ? "active-sidebar sidebar-isCurrent" : ""
        }  flex items-center justify-between w-full py-1 pr-2 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800`}
      >
        <span>{item.label} </span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
       
      </Link>
      {item.children && isExpanded && (
        <ul className="">
          {item.children.map((child) => (
            <li key={child.href} className="relative">
              <Link
                href={child.href}
                className={`${
                  pathname === `${child.href}`
                    ? "active-sidebar sidebar-isCurrent"
                    : ""
                }  flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-12 group hover:bg-neutral800`}
              >
                {child.label}
              </Link>

            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ sidebarItems=[], pathname }) => {
  return (
    <div className="sidebar flex-[0_0_280px] sticky top-[60px]">
       <aside
        id="default-sidebar"
        className="z-40  transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.href} item={item} pathname={pathname} />
      ))}
    </ul>
         
        </div>
      </aside>
    </div>
    
  );
};

export default Sidebar;

