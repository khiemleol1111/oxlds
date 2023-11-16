import Image from 'next/image'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MainFeature from "../components/MainFeature"
import Footer from "@/components/Footer"
import SmallNavbar from "@/components/SmallNavbar"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SmallNavbar></SmallNavbar>
      <Hero></Hero>
      <MainFeature></MainFeature>
      <Footer></Footer>
    </main>
  )
}
