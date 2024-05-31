import React, { useRef } from 'react';
import Ideas from '../Images/ideas.png';
import GraphicDesign from '../Images/graphicdesign.png';
import WebDesign from '../Images/webdesign.png';
import '../Styles/styles.css';

function About() {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="lg:h-[100vh] bg-black h-full" ref={sectionRef}>
      <div className="container page-wrapper mx-auto">
        <div className="w-full uppercase text-center lg:text-left font-bold h-auto ">
          <h1 className="text-xl text-white">About</h1>
          <hr className="border-gray-300 w-full my-1" />
        </div>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-between lg:items-center lg:h-full">
          <div className="w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1 relative mt-20 lg:mt-0">
            <div className="relative w-full h-full flex justify-center items-center flex-col text-center ext-center p-4">
            <div className='absolute w-[80px] h-[80px] bottom-0 right-0'>
              <div className="bg-black w-full h-full blur-lg" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', borderRadius: '50% 50% 50% 50%' }}>
              </div>
              <img src={Ideas} alt="Ideas" className="w-9 h-11 absolute bottom-5 right-6"/>
            </div>

              <h2 className="text-xl mb-10 font-bold text-gray-800">INNOVATIVE IDEAS</h2>
              <p className="text-sm text-gray-600 mt-2">Explore inspiring projects and immerse yourself in creativity!</p>
            </div>
          </div>

          <div className="w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1 relative mt-20 lg:mt-0">
            <div className="w-full h-full flex justify-center items-center flex-col text-center ext-center p-4">
            <div className='absolute w-[80px] h-[80px] bottom-0 right-0'>
              <div className="bg-black w-full h-full blur-lg" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', borderRadius: '50% 50% 50% 50%' }}>
              </div>
              <img src={GraphicDesign} alt="GraphicDesign" className="w-10 h-10 absolute bottom-5 right-6"/>
            </div>
              <h2 className="text-xl mb-10 font-bold text-gray-800">WEB DESIGN</h2>
              <p className="text-sm text-gray-600 mt-2">Explore captivating web design projects and immerse yourself in the realm of creativity!</p>
            </div>
          </div>

          <div className="w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1 relative mt-20 lg:mt-0">
            <div className="w-full h-full flex justify-center items-center flex-col text-center ext-center p-4">
            <div className='absolute w-[80px] h-[80px] bottom-0 right-0'>
              <div className="bg-black w-full h-full blur-lg" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', borderRadius: '50% 50% 50% 50%' }}>
              </div>
              <img src={WebDesign} alt="WebDesign" className="w-9 h-11 absolute bottom-5 right-6"/>
            </div>
              <h2 className="text-xl mb-10 font-bold text-gray-800">GRAPHIC DESIGN</h2>
              <p className="text-sm text-gray-600 mt-2">Explore captivating graphic design projects and dive into visual creativity!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
