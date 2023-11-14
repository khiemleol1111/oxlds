import Image from "next/image";

function Footer() {
    return(
        <div className="footer w-full border-t-[1px] border-neutral-800 mt-[80px]">
            <footer className="max-w-screen-xl mx-auto my-10">
                <div className="footer-top flex items-start justify-between gap-10">
                    <div className="footer-logo">
                        <a href="">
                            <Image src="./oxl-logo.svg" width={80} height={60}></Image>
                        </a>
                        <p className="text-text3 text-sm mt-4">Oxalis Design System</p>
                        
                    </div>
                    <div className="footer-menu flex gap-4 mt-2">
                        <a href="/foundations">Foundation</a>
                        <a href="/design">Design</a>
                        <a href="/develop">Develop</a>
                    </div>
                </div>
                <div className="footer-bottom flex justify-between items-center mt-10">
                    
                    <div className="social-icons flex gap-4">
                        <a href="#">
                            <Image src="/instagram.png" width={24} height={24}></Image>
                        </a>
                        <a href="#">
                            <Image src="/youtube.png" width={24} height={24}></Image>
                        </a>
                        <a href="#">
                            <Image src="/twitter.png" width={24} height={24}></Image>
                        </a>
                    </div>
                    <p className="text-text3 text-sm">@2023 Designership. All rights reserved</p>
                </div>
        </footer>
        </div>
    )
}

export default Footer;