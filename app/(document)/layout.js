import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SmallNavbar from "@/components/SmallNavbar";

export default function DocumentLayout({ children }) {
  const sidebarItems = [
    {
      label: "Foundations",
      href: "/foundations",
      children: [
        {
          label: "Accessibility",
          href: "/foundations/accessibility",
        },
        {
          label: "Formatting localized currency",
          href: "/foundations/formatting",
        },
        {
          label: "Information architecture",
          href: "/foundations/information",
        },
        {
          label: "Internationalization",
          href: "/foundations/internationalization",
        },
        {
          label: "Shopify experience values",
          href: "/foundations/experience-value",
        },
      ],
    },
    {
      label: "Design",
      href: "/design",
      children: [
        {
          label: "Pro design language",
          href: "/design/design-language",
        },
        {
          label: "Colors",
          href: "/design/colors",
        },
        {
          label: "Depth",
          href: "/design/depth",
        },
        {
          label: "Icons",
          href: "/design/icons",
        },
        {
          label: "Layout",
          href: "/design/layout",
        },
        {
          label: "Motion",
          href: "/design/motion",
        },
        {
          label: "Typography",
          href: "/design/typography",
        },
      ],
    },
  ];
  return (
    <>
      <SmallNavbar></SmallNavbar>
      <main className="flex flex-grow">
      {/* <Sidebar></Sidebar> */}
     
      <Sidebar sidebarItems={sidebarItems} pathname="/"></Sidebar>
      {children}
      
    </main>
    </>
  )
}