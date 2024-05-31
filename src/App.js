import React, { useState, useCallback } from 'react';
import './index.css';
import './Styles/styles.css';
import Header from './Layouts/Header.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Skills from './Pages/Skills.js';
import Projects from './Pages/Projects.js';
import Footer from './Layouts/Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [showScroll] = useState(true);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      {showScroll && (
        <div
          className="border-white border-2 fixed bottom-5 right-5 w-10 h-10 bg-black text-white flex justify-center items-center rounded-full cursor-pointer transition-opacity duration-300 z-40 hover:bg-gray-700"
          onClick={scrollTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </div>
  );
}

export default App;
