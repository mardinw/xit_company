import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
    <>
        <div className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 md:w-1/3 text-black">
                        <Link className="text-gray-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="#">
                        PT. XTRA INDO TAMA
                        </Link>
                    </div>
                    <div className="w-full px-3 pb-3 mb-2 text-center md:w-1/3 md:text-left sm:px-1 md:mb-0 sm:pb-0"></div>
                    <div className="flex-1 md:w-1/3">
                        <p className="uppercase text-gray-800 font-bold md:mb-6">Sitemap</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link to="#services" className="no-underline hover:underline text-gray-800 hover:text-gray-700">Services</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link to="#about" className="no-underline hover:underline text-gray-800 hover:text-gray-700">About Us</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link to="#why" className="no-underline hover:underline text-gray-800 hover:text-gray-700">Why</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Footer
