import React from 'react'
import {useState , useEffect} from 'react'

function NavBar(activeSection) {
    const [scrolled , setScrolled] = useState(false);//for navbar background change on scroll
    const [menuOpen , setMenuOpen] = useState(false);//for mobile menu toggle
    const links = ["Home" , "About" , "Skills" , "Projects" , "Contact"];

    useEffect(() => {
        const handler = () => {
            if(window.scrollY > 40) setScrolled(true);
            else setScrolled(false);
        }

        window.addEventListener("scroll" , handler);
        return () => window.removeEventListener("scroll" , handler);
    } , []);//scroll listener for background change

    //scroll function for smooth scrolling to sections
    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if(el) el.scrollIntoView({behavior: "smooth"});
        setMenuOpen(false);//close mobile menu on link click
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-8 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-orange-500/20" : "bg-transparent"}`}>
                {/* Logo */}
                <div 
                onClick={()=>scrollTo("home")}
                className="flex items-center gap-2 cursor-pointer">
                    <div className="w-9 h-9 bg-orange-500 clip-triangle"></div>
                    <span className="font-bebas text-2xl tracking-widest text-white">PORT<span className="text-orange-500">FOLIO</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10">
                    {links.map((l)=>(
                        <button
                        key={l}
                        onClick={()=>{scrollTo(l)}}
                        className={`font-bebas tracking-widest text-sm transition-all duration-200 border-b-2 pb-1 ${
                            activeSection === l.toLowerCase() ? "text-orange-500 border-orange-500" : "text-gray-400 border-transparent hover:text-orange-500"
                        }`}>{l}</button>
                    ))}
                </div>

                {/* Hamburger (mobile) for creation of mobile menu toggle */}
                <button
                onClick = {()=> setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5">
                    <span
                    className={`w-6 h-[2px] bg-orange-500 transition-all duration-300 ${
                        menuOpen ? "rotate-45 translate-y-2" : ""
                    }`}></span>
                    <span 
                    className={`w-6 h-[2px] bg-orange-500 transition-all duration-300 ${
                        menuOpen ? "opacity-0" : ""
                    }`}></span>
                    <span 
                    className={`w-6 h-[2px] bg-orange-500 transition-all duration-300 ${
                        menuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}></span>
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-[68px] left-0 right-0 bg-black/95 backdrop-blur-md border-b border-orange-500/20 p-6 flex flex-col gap-6 md:hidden">
                        {links.map((l)=>(
                            <button
                            key={l}
                            onClick={()=>scrollTo(l)}
                            className="text-left font-base text-xl tracking-widest text-white hover:text-orange-500 transition">
                                {l}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </>
    )
}

export default NavBar;