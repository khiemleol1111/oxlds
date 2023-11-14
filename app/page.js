import Image from 'next/image'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import MainFeature from "../components/MainFeature"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <MainFeature></MainFeature>
      <Footer></Footer>
    </main>
  )
}
