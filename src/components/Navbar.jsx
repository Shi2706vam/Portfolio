import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = ({isDarkMode, scrolling, setScrolling}) => {
//   const [Scrolling, setScrolling] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navItem = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        scrolling ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex item-center justify-between">
        <a className="text-xl font-bold  flex item-center" href="#home">
          <span className="relative z-10">
            <span className="text-glow text-primary"> Shivam </span>{" "}
            <span className="text-secondary">Kumar</span>
          </span>
        </a>

        {/* large screen Navbar */}
        <div className="hidden md:flex space-x-8">
          {navItem.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-primary text-secondary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* small screen Navbar */}

        <button
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className={`md:hidden fixed top-4 right-12 p-2 z-50 text-foreground ${isDarkMode ? "text-white" : "text-black"}`}
          aria-label={isOpenMenu ? "Colse Menu" : "Open Menu"}
        >
          {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed w-full left-0 top-0 h-[100vh] bg-background/90 background-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isOpenMenu
              ? "opacity-100 pointer-event-auto"
              : "opacity-0 pointer-event-auto"
          )}
        >
          <div className={`flex flex-col space-y-8 text-xl ${
            isDarkMode ? "text-white" : "text-black"}`}>
            {navItem.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpenMenu(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
