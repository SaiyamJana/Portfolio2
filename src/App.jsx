import React from 'react'
import {useState , useEffect} from 'react'
import Navbar from "../components/Navbar/Navbar.jsx"
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Projects from '../components/Projects/Projects.jsx';
import DevStats from '../components/DevStats/DevStats.jsx';

function App() {
  const [activeSection , setActiveSection] = useState("home");

  useEffect(()=>{
    const sections = ["home" , "about" , "skills" , "projects" , "contact"];

    // IntersectionObserver(()=>{})
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e => {
        if(e.isIntersecting) setActiveSection(e.target.id);
      });
    } , {threshold: 0.4});

    sections.forEach(id => {
      const el = document.getElementById(id);
      if(el) observer.observe(el);
    });

    return () => observer.disconnect();
  } , []);

  return (
    <>
      <div className="bg-[#050505] text-white font-serif">
        <Navbar activeSection={activeSection}/>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevStats />
      </div>
      
    </>
  )
}

export default App;
