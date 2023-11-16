import Image from "next/image";


function SmallNavbar() {
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
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-text1 rounded md:bg-transparent md:text-primary md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-text1 rounded hover:text-primary md:hover:bg-transparent md:p-0 ">Foundation</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-text1 rounded hover:text-primary md:hover:bg-transparent  md:p-0 ">Design</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-text1 rounded hover:text-primary md:hover:bg-transparent  md:p-0 ">Develop</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    )
}

export default SmallNavbar;