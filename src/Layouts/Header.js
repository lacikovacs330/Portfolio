import React, { useState } from 'react';
import Logo from '../Images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'auto',
        block: 'start' 
      });
    }
  };
  

  return (
    <header className="bg-gray-200 w-full h-[10vh] top-0 left-0 z-50 shadow-md ">
      <div className="container mx-auto page-wrapper flex justify-around lg:justify-between items-center h-full">

        <div className="flex justify-center items-center animate-fade-in">
          <img src={Logo} alt="Logo" className="w-9 h-9" />
        </div>

        <nav className={`hidden lg:flex justify-center items-center w-1/2 animate-fade-in`}>
          <ul className="flex uppercase space-x-6 ">
            <li><a href="#home" onClick={() => scrollToSection('#home')} className="text-gray-500 hover:text-black transition-colors duration-300">HOME</a></li>
            <li><a href="#about"onClick={() => scrollToSection('#about')} className="text-gray-500 hover:text-black transition-colors duration-300">ABOUT</a></li>
            <li><a href="#skills" className="text-gray-500 hover:text-black transition-colors duration-300">SKILLS</a></li>
            <li><a href="#projects" className="text-gray-500 hover:text-black transition-colors duration-300">PROJECTS</a></li>
            <li><a href="#github" className="text-gray-500 hover:text-black transition-colors duration-300">GITHUB</a></li>
          </ul>
        </nav>

        <div className="hidden lg:flex justify-center items-center animate-fade-in">
          <a href="#contact" className="px-4 py-2 border-2 border-black text-black rounded-xl transition duration-300 hover:bg-black hover:text-white">Contact</a>
        </div>

        <div className="block lg:hidden">
          <button className="text-black focus:outline-none animate-fade-in " onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <nav className={`lg:hidden absolute inset-x-0 bg-gray-200 z-50 transition-all duration-500 ease-in-out`} style={{maxHeight: '500px', overflow: 'hidden', opacity: isOpen ? 1 : 0,}}>
        <ul className="flex flex-col w-full items-center justify-center">
          <li className='mt-2 mb-2'><a href="#home">HOME</a></li>
          <li className='mt-2 mb-2'><a href="#about">ABOUT</a></li>
          <li className='mt-2 mb-2'><a href="#skills">SKILLS</a></li>
          <li className='mt-2 mb-2'><a href="#projects">PROJECTS</a></li>
          <li className='mt-2 mb-2'><a href="#github">GITHUB</a></li>
          <div className="w-full flex justify-center items-center mt-2 mb-2">
            <a href="#contact" className="px-4 py-3 bg-black text-white rounded-xl">Contact</a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
