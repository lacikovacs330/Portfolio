import React from 'react';
import Main from '../Images/Main.png';

function Home() {
  return (
    <section className="bg-gray-200 h-[100vh] flex justify-center items-center">
      <div className="page-wrapper w-full flex flex-col lg:flex-row justify-center items-center h-full">
        
        <div className="text-center lg:w-full opacity-0 animate-fade-in-delay transition-opacity duration-500 delay-500">
          <h1 className="text-5xl font-bold text-gray-800">Frontend Developer</h1>
          <p className="text-2xl mt-2 font-bold text-gray-800">"Your website, our passion."</p>
        </div>

        <div className="lg:w-full flex justify-center items-center mt-4 lg:mt-0 opacity-0 animate-fade-in-delay transition-opacity duration-500 delay-500">
          <div className="w-64 h-64 rounded-full overflow-hidden flex justify-center items-center bg-black">
            <img src={Main} alt="Main" className="w-40" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
