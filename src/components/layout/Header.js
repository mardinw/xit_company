import * as React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {

    React.useEffect(() => {
        const header = document.getElementById("header");
        const navContent = document.getElementById("nav-content");
        const navAction = document.getElementById("navAction");
        const toToggle = document.querySelectorAll(".toggleColour");
    
        const handleScroll = () => {
            const scrollpos = window.scrollY;

            if (scrollpos > 10) {
                header.classList.add("bg-white", "shadow");
                navAction.classList.remove("bg-white", "text-gray-800");
                navAction.classList.add("gradient", "text-white");
                for (const item of toToggle) {
                    item.classList.add("text-gray-800");
                    item.classList.remove("text-white");
                }
                navContent.classList.remove("bg-gray-100");
                navContent.classList.add("bg-white");
            } else {
                header.classList.remove("bg-white", "shadow");
                navAction.classList.remove("gradient", "text-white");
                navAction.classList.add("bg-white", "text-gray-800");
                for (const item of toToggle) {
                    item.classList.add("text-white");
                    item.classList.remove("text-gray-800");
                }
                navContent.classList.remove("bg-white");
                navContent.classList.add("bg-gray-100");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(() => {
        const navMenuDiv = document.getElementById("nav-content");
        const navMenu = document.getElementById("nav-toggle");
        const checkParent = (t, elm) => {
            while (t) {
                if (t === elm) {
                    return true;
                }
                t = t.parentNode;
            }
            return false;
        }

        const check = (e) => {
            const target = e.target;

            if (!checkParent(target, navMenuDiv)) {
                if(checkParent(target, navMenu)) {
                    navMenuDiv.classList.toggle("hidden");
                } else {
                    navMenuDiv.classList.add("hidden");
                }
            }
        };

        document.addEventListener("click", check);
        return () => {
            document.removeEventListener("click", check);
        }
    },[]);

    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <Link className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="#">
                        XIT
                    </Link>
                </div>            
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-inner transform transition hover:scale-150 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div id="nav-content" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">

                        <li className="mr-3">
                            <Link className="toggleColour inline-block py-2 px-4 text-white font-bold no-underline" to="#services">Services</Link>
                        </li>                
                        <li className="mr-3">
                            <Link className="toggleColour inline-block py-2 px-4 text-white font-bold no-underline" to="#why">Why</Link>
                        </li>                
                        <li className="mr-3">
                            <Link className="toggleColour inline-block py-2 px-4 text-white font-bold no-underline" to="#about">About Us</Link>
                        </li>
                    </ul>
                    <Link id="navAction" className="mx-auto lg:mx-0 bg-green-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-inherit transform transition hover:scale-105 duration-300 ease-in-out" to="#contact">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}
export default Header
