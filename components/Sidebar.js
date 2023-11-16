"use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { Sidebar } from "./Sidebar.1";



// function Sidebar() {
  // const pathname = usePathname();
  
  // const [isExpanded, setExpanded] = useState(false);

  // const toggleExpand = () => {
  //   setExpanded(!isExpanded);
  // };

  // const sidebarItems = [
  //   {
  //     label: "Foundations",
  //     href: "/foundations",
  //     children: [
  //       {
  //         label: "Accessibility",
  //         href: "/foundations/accessibility",
  //       },
  //       {
  //         label: "Formatting localized currency",
  //         href: "/foundations/formatting",
  //       },
  //       {
  //         label: "Information architecture",
  //         href: "/foundations/information",
  //       },
  //       {
  //         label: "Internationalization",
  //         href: "/foundations/internationalization",
  //       },
  //       {
  //         label: "Shopify experience values",
  //         href: "/foundations/experience-value",
  //       },
  //     ],
  //   },
  //   {
  //     label: "Design",
  //     href: "/design",
  //     children: [
  //       {
  //         label: "Pro design language",
  //         href: "/design/design-language",
  //       },
  //       {
  //         label: "Colors",
  //         href: "/design/colors",
  //       },
  //       {
  //         label: "Depth",
  //         href: "/design/depth",
  //       },
  //       {
  //         label: "Icons",
  //         href: "/design/icons",
  //       },
  //       {
  //         label: "Layout",
  //         href: "/design/layout",
  //       },
  //       {
  //         label: "Motion",
  //         href: "/design/motion",
  //       },
  //       {
  //         label: "Typography",
  //         href: "/design/typography",
  //       },
  //     ],
  //   },
  // ];

  // return (
  //   <div className="sidebar flex-[0_0_280px] sticky top-[60px]">
  //     <aside
  //       id="default-sidebar"
  //       className="z-40  transition-transform -translate-x-full sm:translate-x-0"
  //       aria-label="Sidebar"
  //     >
  //       <div className="h-full px-3 py-4 overflow-y-auto">
  //         <ul className="space-y-2">
  //           {sidebarItems.map((item) => (
  //             <li key={item.href} className="relative">
  //               <Link onClick={toggleExpand}
  //                 href={`${item.href}`}
  //                 smooth="true"
  //                 duration={500}
  //                 className={`${
  //                   pathname === `${item.href}`
  //                     ? "active-sidebar sidebar-isCurrent"
  //                     : ""
  //                 }  flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800`}
  //               >
  //                 {item.label}
  //               </Link>
  //               {item.children && isExpanded  && (
  //                 <ul className={`space-y-2`}>
  //                 {item.children.map((child) => (
  //                   <li key={child.href} className="relative">
  //                     <Link
  //                       href={`${child.href}`}
  //                       smooth="true"
  //                       duration={500}
  //                       className={`${
  //                         pathname === `${child.href}`
  //                           ? "active-sidebar sidebar-isCurrent"
  //                           : ""
  //                       }  flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800`}
  //                     >
  //                       {child.label}
  //                     </Link>
  //                   </li>
  //                 ))}
  //               </ul>
  //                 )}
                
  //             </li>
  //           ))}

          
              
          
  //         </ul>
         
  //       </div>
  //     </aside>
  //   </div>
  // );


// }

// export default Sidebar;


// components/Sidebar.js
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
    <li key={item.href} className="relative">
      <div
        onClick={toggleExpand}
        className={`${
          pathname === `${item.href}` ? "active-sidebar sidebar-isCurrent" : ""
        }  flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800`}
      >
        {item.label}
      </div>

      {item.children && isExpanded && (
        <ul className="space-y-2 pl-3">
          {item.children.map((child) => (
            <li key={child.href} className="relative">
              <Link
                href={child.href}
                className={`${
                  pathname === `${child.href}`
                    ? "active-sidebar sidebar-isCurrent"
                    : ""
                }  flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800`}
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

