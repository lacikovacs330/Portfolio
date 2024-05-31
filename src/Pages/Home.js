import React, { useRef } from 'react';
import CV from "../Files/CV.pdf";

function Home() {
  const homeRef = useRef(null);

  return (
    <main id="home" className="bg-black h-[100vh] flex justify-center items-center relative" ref={homeRef}>
      <div className="container page-wrapper mx-auto">
      <div className="w-full h-full flex justify-center items-center text-center flex-col ">
          <h1 className="text-5xl font-bold text-gray-800 z-10 text-white animate-fade-in-delay opacity-0">
              Frontend Developer
            </h1>
            <p className="text-2xl mt-2 font-bold text-gray-800 z-10 text-white animate-fade-in-delay opacity-0">
              "Your website, our passion."
            </p>
            <a href={CV} download className="z-10 mt-2 px-4 py-2 border-2 border-white hover:border-white text-white rounded-xl transition duration-300 hover:bg-black hover:text-white animate-fade-in-delay opacity-0">Download CV</a>
        </div>
        <div className="w-full h-full">
          <div className="absolute w-full h-[70vh] bottom-10 left-0" style={{ 
            background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            borderRadius: '50% 50% 0 0',
            filter: 'blur(40px)'
          }}>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
