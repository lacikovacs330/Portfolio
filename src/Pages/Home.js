import React, { useState, useEffect, useRef } from 'react';
import Main from '../Images/Main.png';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    const currentHomeRef = homeRef.current;

    if (currentHomeRef) {
      observer.observe(currentHomeRef);
    }

    return () => {
      if (currentHomeRef) {
        observer.unobserve(currentHomeRef);
      }
    };
  }, []); 

  return (
    <main id="home" className="bg-gray-200 h-[100vh] flex justify-center items-center" ref={homeRef} >
      <div className="container mx-auto opacity-0 transition-opacity duration-500" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <div className="page-wrapper w-full flex flex-col lg:flex-row justify-center items-center h-full">
          <div className="text-center lg:w-full">
            <h1 className="text-5xl font-bold text-gray-800 opacity-0 animate-fade-in-delay transition-opacity duration-500 delay-500" style={{ opacity: isVisible ? 1 : 0 }}>
              Frontend Developer
            </h1>
            <p className="text-2xl mt-2 font-bold text-gray-800 opacity-0 animate-fade-in-delay transition-opacity duration-500 delay-500" style={{ opacity: isVisible ? 1 : 0 }}>
              "Your website, our passion."
            </p>
          </div>

          <div className="lg:w-full flex justify-center items-center mt-4 lg:mt-0">
            <div className="w-64 h-64 rounded-full overflow-hidden flex justify-center items-center bg-black opacity-0 animate-fade-in-delay transition-opacity duration-500 delay-500" style={{ opacity: isVisible ? 1 : 0 }}>
              <img src={Main} alt="Main" className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
