import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

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

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
    if (!showContactPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className={`bg-black w-full h-[10vh] top-0 left-0 z-50`}>
      <div className="container mx-auto page-wrapper flex justify-around lg:justify-between items-center h-full">

        <div className="flex justify-center items-center animate-fade-in text-white text-xl underline">
          WW
        </div>

        <nav className={`hidden lg:flex justify-center items-center w-1/2 animate-fade-in`}>
          <ul className="flex uppercase space-x-6 ">
            <li><a href="#home" onClick={() => scrollToSection('#home')} className="text-white hover:text-white transition-colors duration-300">HOME</a></li>
            <li><a href="#about" onClick={() => scrollToSection('#about')} className="text-white hover:text-white transition-colors duration-300">ABOUT</a></li>
            <li><a href="#skills" className="text-white hover:text-white transition-colors duration-300">SKILLS</a></li>
            <li><a href="#projects" className="text-white hover:text-white transition-colors duration-300">PROJECTS</a></li>
          </ul>
        </nav>

        <div className="hidden lg:flex justify-center items-center animate-fade-in">
          <a href="#contact" onClick={toggleContactPopup} className="px-4 py-2 border-2 border-white hover:border-white text-white rounded-xl transition duration-300 hover:bg-black hover:text-white">Contact</a>
        </div>

        <div className="block lg:hidden">
          <button className="text-white focus:outline-none animate-fade-in" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {showContactPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50" onClick={toggleContactPopup}>
          <div className="w-[300px] lg:w-1/3 bg-white p-8 rounded-lg flex flex-col" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className='w-full mb-4'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <div className="mt-1">
                <a href="mailto:lacikovacs330@gmail.com"><button type="button" class="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">lacikovacs330@gmail.com</button></a>
              </div>
            </div>
            <div className='w-full mb-4'>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
              <div className="mt-1">
                <a href="tel:+36205794154"><button type="button" class="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">+36205794154</button></a>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300" onClick={toggleContactPopup}>Close</button>
          </div>
        </div>
      )}



      <nav className={`lg:hidden absolute inset-x-0 bg-black z-40 transition-all duration-500 ease-in-out`} style={{ maxHeight: '500px', overflow: 'hidden', opacity: isOpen ? 1 : 0 }}>
        <ul className="flex flex-col w-full items-center justify-center text-white">
          <li className='mt-2 mb-2'><a href="#home">HOME</a></li>
          <li className='mt-2 mb-2'><a href="#about">ABOUT</a></li>
          <li className='mt-2 mb-2'><a href="#skills">SKILLS</a></li>
          <li className='mt-2 mb-2'><a href="#projects">PROJECTS</a></li>
          <div className="w-full flex justify-center items-center mt-2 mb-2">
            <a href="#contact" onClick={toggleContactPopup} className="px-4 py-3 border-2 border-white text-white rounded-xl">Contact</a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
