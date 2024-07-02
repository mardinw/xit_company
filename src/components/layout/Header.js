import * as React from "react"
import { Link } from "gatsby";

const Header = () => (
    <nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
                <Link className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="#">
                    XIT
                </Link>
            </div>
        </div>
        <div className="block lg:hidden pr-4">
            <button className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-inner transform transition hover:scale-150 duration-300 ease-in-out">
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div id="nav-content" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">

                <li className="mr-3">
                    <Link className="inline-block py-2 px-4 text-black font-bold no-underline" to="#services">Services</Link>
                </li>                
                <li className="mr-3">
                    <Link className="inline-block py-2 px-4 text-black font-bold no-underline" to="#why">Why</Link>
                </li>                
                <li className="mr-3">
                    <Link className="inline-block py-2 px-4 text-black font-bold no-underline" to="#about">About Us</Link>
                </li>
            </ul>
            <button className="mx-auto lg:mx-0 hover:underline bg-green-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-inherit transform transition hover:scale-105 duration-300 ease-in-out">Contact Us</button>
        </div>
    </nav>
);

export default Header
