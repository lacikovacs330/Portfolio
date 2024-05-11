import React from 'react';

function About() {
  return (
    <section id="about" className=" lg:h-[100vh] bg-gray-200 h-full">
        <div className="container page-wrapper mx-auto">

            <div className="flex flex-wrap gap-1 justify-center lg:justify-between lg:items-center lg:h-full animate-fade-in-delay">
                <div className="w-full uppercase text-center lg:text-left font-bold h-auto animate-fade-in-delay">
                    <h1 className="text-xl">About</h1>
                    <hr className="border-gray-300 w-full my-1" />
                </div>
                <div className="card w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1"></div>
                <div className="card w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1"></div>
                <div className="card w-[250px] h-[300px] md:w-[320px] md:h-[420px] bg-white m-2 shadow-main transition-transform duration-400 transform hover:-translate-y-1"></div>
            </div>
        </div>
    </section>
  );
}

export default About;
