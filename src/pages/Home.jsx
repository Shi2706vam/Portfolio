import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BackgroundAnimations } from "../components/Background";
import Hero from "../components/Hero";
import Theme from "../components/Theme";
import About from "../components/About";
import Skills from "../components/Skills";
import AsideNav from "../components/AsideNav";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  return (
    <div className="min-h-screen bg-background text-forground overflow-x-hidden">
      
      <Theme
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        scrolling={scrolling}
        setScrolling={setScrolling}
      />
      <Navbar
        isDarkMode={isDarkMode}
        scrolling={scrolling}
        setScrolling={setScrolling}
      />
      <AsideNav />
      <BackgroundAnimations />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
};

export default Home;
