import Link from "next/link";

function PageContent({sections}) {
  
    return(
       
        <div className="sticky text-xs top-[84px] md:flex-[0_0_256px] p-4  border-[1px] border-neutral-800 rounded-lg">
            <ul className="flex flex-col gap-2">
                <span className="text-sm mb-2">On this page</span>
                {sections.map((section) => (
                    
                    <li key={section.id}>
                        <Link href={`#${section.id}`} smooth="true" duration={500}>
                        {section.label}
                        </Link>
                        
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default PageContent;