import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SmallNavbar from "@/components/SmallNavbar";

export default function DocumentLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      {children}
      
    </div>
  )
}