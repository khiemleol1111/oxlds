function Sidebar() {
  return (
    <div className="sidebar flex-[0_0_280px] sticky top-[60px]">
      <aside
        id="default-sidebar"
        className="z-40  transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 ">
            
            <li>
            <button type="button" className="flex items-center w-full px-2 text-base text-text1 transition duration-75 rounded-lg group hover:bg-neutral800" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Foundations</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 10 6">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-foudations" className=" py-2  text-sm">
                  <li className="relative">
                     <span className="sidebar-isCurrent">
                     <a href="#" className="active-sidebar flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Accessibility</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" className="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Formatting localized currency</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" className="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Information architecture</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" className="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Internationalization</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" className="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Shopify experience values</a>
                     </span>
                  </li>
                  
                
            </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
