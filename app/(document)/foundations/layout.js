import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import SmallNavbar from "@/components/SmallNavbar";

export default function DocumentLayout({ children }) {
  return (
    <main className="flex flex-grow">
      {children}
      
    </main>
  )
}