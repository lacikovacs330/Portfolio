import React, { useState, useEffect } from 'react';
import '../Styles/styles.css';
import Logo from '../Images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 601) {
        setIsOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <header className="bg-slate-200 w-full relative" style={{ height: "10vh" }}>
      <div className="page-wrapper flex justify-between items-center">

        <div className="logo flex justify-center items-center">
          <img src={Logo} alt="Logo" width={45} height={45} />
        </div>

        <nav className="nav flex justify-center items-center">
          <ul className="flex uppercase">
            <li className="p-3"><a href="#home">HOME</a></li>
            <li className="p-3"><a href="#about">ABOUT</a></li>
            <li className="p-3"><a href="#skills">SKILLS</a></li>
            <li className="p-3"><a href="#projects">PROJECTS</a></li>
            <li className="p-3"><a href="#github">GITHUB</a></li>
          </ul>
        </nav>

        <div className="contact flex justify-center items-center">
          <a href="#contact" className="px-7 py-2 border-2 border-black text-black rounded-2xl">Contact</a>
        </div>

        <nav className={`hamburger-menu ${isOpen && "open"}`}>
          <button className="hamburger" id="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>

      </div>

      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="flex uppercase flex-col w-full">
          <li className="py-4 "><a href="#home">HOME</a></li>
          <li className="py-4 "><a href="#about">ABOUT</a></li>
          <li className="py-4 "><a href="#skills">SKILLS</a></li>
          <li className="py-4 "><a href="#projects">PROJECTS</a></li>
          <li className="py-4 "><a href="#github">GITHUB</a></li>
          <div className="w-full py-4">
            <a href="#contact" className="px-7 py-2 bg-black text-white rounded-2xl">Contact</a>
          </div>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
