import React from 'react';

function About() {
  return (
    <section className=" lg:h-[100vh] bg-gray-200 h-full">
        <div className="page-wrapper">
            <div className="w-full uppercase text-center lg:text-left font-bold h-auto lg:h-[10vh] animate-fade-in-delay">
                <h1 className="text-xl">About</h1>
                <hr className="border-gray-300 w-full my-1" />
            </div>

            <div className="flex flex-wrap gap-1 justify-center lg:justify-between lg:items-center lg:h-[90vh] animate-fade-in-delay">
                <div className="card w-[320px] h-[420px] bg-white m-2"></div>
                <div className="card w-[320px] h-[420px] bg-white m-2"></div>
                <div className="card w-[320px] h-[420px] bg-white m-2"></div>
            </div>


        </div>
    </section>
  );
}

export default About;
