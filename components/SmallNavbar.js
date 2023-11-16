"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


function SmallNavbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Foundations",
      link: "/foundations"
    },
    {
      name: "Design",
      link: "/design"
    },
    {
      name: "Develop",
      link: "/develop"
    },
  ]
    return(
        
<nav className="bg-neutral900 z-20 sticky w-full top-0 left-0 text-text1 border-b-[1px] border-neutral-800">
  <div className="flex flex-wrap items-center justify-between mx-auto px-10 h-[60px]">
  <a href="#" className="flex items-center">
      <Image src="/oxl-logo.svg" width={80} height={40} alt="Oxalis Logo"></Image>
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-text1 focus:ring-2 border-[1px] border-text3  focus:ring-text2 font-medium rounded-lg px-4 py-2 text-center mr-3 md:mr-0">Get started</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text1 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-text2" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                {navLinks.map((navLink) => (
                    
                    <li key={navLink.name} className="relative">
                        <Link href={`${navLink.link}`} smooth="true" duration={500} className={ `${pathname === `${navLink.link}` ? 'text-primary' : 'text-text1 rounded hover:text-primary'}  block py-2 pl-3 pr-4 text-text1 rounded hover:text-primary md:hover:bg-transparent  md:p-0`}>
                        {navLink.name}
                        </Link>
                        
                    </li>
                    ))}
            </ul>
  </div> */}
  </div>
</nav>

    )
}

export default SmallNavbar;



              {/* <button
                type="button"
                className="flex items-center w-full py-1 px-2 text-base text-text1 transition duration-75 rounded-lg group hover:bg-neutral800"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Foundations
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button> */}
