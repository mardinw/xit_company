import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Hero from "../sections/hero";
import Services from "../sections/services";
import About from "../sections/about";
import Why from "../sections/why";
import Contact from "../sections/contact";

const Layout = ({children}) => (
    <div className="bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-400">
        <Header />
        <Hero />
        <Services />
        <About />
        <Why />
        <Contact/>
        <main className="px-2">
            {children}
        </main>
        <Footer/>
    </div>
);

export default Layout