function Sidebar() {
  return (
    <div className="sidebar fixed top-[60px] left-0">
      <aside
        id="default-sidebar"
        className="z-40 w-[280px] h-screen transition-transform -translate-x-full sm:translate-x-0 pt-6 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 ">
            
            <li>
            <button type="button" class="flex items-center w-full px-2 text-base text-text1 transition duration-75 rounded-lg group hover:bg-neutral800" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Foundations</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-foudations" class=" py-2  text-sm">
                  <li className="relative">
                     <span className="sidebar-isCurrent">
                     <a href="#" class="active-sidebar flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Accessibility</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" class="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Formatting localized currency</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" class="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Information architecture</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" class="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Internationalization</a>
                     </span>
                  </li>
                  <li>
                     <span>
                     <a href="#" class="flex items-center w-full p-1 text-text1 transition duration-75 rounded-lg pl-8 group hover:bg-neutral800">Shopify experience values</a>
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
