import React from 'react';
import '../Styles/styles.css';
import Main from '../Images/Main.png';

function Home() {
  return (
    <section className="main bg-slate-200 w-full">
      <div className="page-wrapper flex">

        <div className="title w-full h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold ">Frontend developer</h1>
          <p className="text-2xl mt-2 font-bold">“Your website, our passion.”</p>
        </div>

        <div className="circle w-full h-full flex items-center justify-end">
          <div className="circle-image">
            <img src={Main} alt="Main" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
