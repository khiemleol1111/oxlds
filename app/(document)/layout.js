import Footer from "@/components/Footer";
import SmallNavbar from "@/components/SmallNavbar";

export default function DocumentLayout({ children }) {
  return (
    <>
      <SmallNavbar></SmallNavbar>
      <main className="">{children}</main>
    </>
  )
}