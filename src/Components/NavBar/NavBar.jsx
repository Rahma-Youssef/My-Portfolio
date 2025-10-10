import React, { useState, useEffect } from "react";
import Style from "./NavBar.module.css";
import logo from "./../../assets/images/portfolio-logo.png";
import DarkMood from "../DarkMood/DarkMood";
import { Icon } from "@iconify-icon/react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home", delay: 0.3 },
    { name: "Skills", id: "skills", delay: 0.6 },
    { name: "Projects", id: "projects", delay: 0.9 },
    { name: "Contact", id: "contact", delay: 1.2 },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      if (observer) {
        sections.forEach((section) => observer.unobserve(section));
        observer.disconnect();
      }
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* 🩵 Logo */}
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={logo} alt="Romify" className="w-10" />
          <h1
            className={`md:text-2xl text-xl font-bold dark:text-white mt-2 ${Style.Logoname}`}
          >
            omify
          </h1>
        </div>

        {/* 🌐 Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-10 relative">
          {navLinks.map((link) => (
            <motion.div
              key={link.id}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: link.delay }}
              onClick={() => scrollToSection(link.id)}
              className={`relative cursor-pointer text-lg transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-[#00c3ff] via-[#7d2ae8] to-[#ff6ec7] bg-clip-text text-transparent font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }`}
            >
              <motion.span
                animate={
                  activeSection === link.id
                    ? {
                        scale: [1, 1.15, 1],
                        y: [-2, 0],
                        textShadow:
                          "0px 0px 8px rgba(59,130,246,0.6)",
                      }
                    : { scale: 1, textShadow: "none" }
                }
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {link.name}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* 🌙 Dark mode + Menu Icon */}
        <div className="flex items-center gap-4">
          <DarkMood />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none cursor-pointer"
          >
            {isOpen ? (
              <Icon icon="fa6-solid:bars-staggered" width="30" height="30" />
            ) : (
              <Icon icon="fa7-solid:bars" width="32" height="32" />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 shadow-md flex flex-col ps-5 gap-4 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: link.delay }}
            onClick={() => scrollToSection(link.id)}
            className={`relative cursor-pointer text-lg transition-all duration-300 ${
              activeSection === link.id
                ? "bg-gradient-to-r from-[#00c3ff] via-[#7d2ae8] to-[#ff6ec7] bg-clip-text text-transparent font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
            }`}
          >
            <motion.span
              animate={
                activeSection === link.id
                  ? { scale: [1, 1.15, 1], y: [-2, 0] }
                  : { scale: 1 }
              }
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {link.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

