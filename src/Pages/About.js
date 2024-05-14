import React from 'react';
import Ideas from '../Images/ideas.png';
import GraphicDesign from '../Images/graphicdesign.png';
import WebDesign from '../Images/webdesign.png';
import '../Styles/styles.css';

function About() {
  return (
    <section id="about" className=" lg:h-[100vh] bg-gray-200 h-full">
        <div className="container page-wrapper mx-auto">

            <div className="flex flex-wrap gap-2 justify-center lg:justify-between lg:items-center lg:h-full ">
                <div className="w-full uppercase text-center lg:text-left font-bold h-auto ">
                    <h1 className="text-xl">About</h1>
                    <hr className="border-gray-300 w-full my-1" />
                </div>

                <div className="card w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1 relative mt-20 lg:mt-0">
                  <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-sky-600 rounded-full flex justify-center items-center'>
                    <img src={Ideas} alt="Main" className="w-11" />
                  </div>

                  <div className="w-full h-full flex justify-center items-center flex-col text-center ext-center p-4">
                    <h2 className="text-xl mb-10 font-bold text-gray-800">INOVATIVE IDEAS</h2>
                    <p className="text-sm text-gray-600 mt-2">Explore inspiring projects and immerse yourself in creativity!</p>
                  </div>
                </div>

                <div className="card w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1 relative mt-20 lg:mt-0">
                  <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-600 rounded-full flex justify-center items-center'>
                    <img src={WebDesign} alt="Main" className="w-11" />
                  </div>

                  <div className="w-full h-full flex justify-center items-center flex-col text-center ext-center p-4">
                    <h2 className="text-xl mb-10 font-bold text-gray-800">WEB DESIGN</h2>
                    <p className="text-sm text-gray-600 mt-2">Explore captivating web design projects and immerse yourself in the realm of creativity!</p>
                  </div>
                </div>

                <div className="card w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1 relative mt-20 lg:mt-0">
                  <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-violet-600 rounded-full flex justify-center items-center'>
                    <img src={GraphicDesign} alt="Main" className="w-11" />
                  </div>

                  <div className="w-full h-full flex justify-center items-center flex-col text-center ext-center p-4">
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
