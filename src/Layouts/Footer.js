import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className='bg-black w-full h-[10vh] z-50 shadow-md bg-black border-t-2 border-white '>
      <div className="container mx-auto page-wrapper flex justify-around lg:justify-between items-center h-full">
        <div className="text-white w-full text-center flex justify-center items-center">
          <p className="flex items-center">
            <FontAwesomeIcon icon={faCopyright} className="mr-2" />
             WebWise  &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
