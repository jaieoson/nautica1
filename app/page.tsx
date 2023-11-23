"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import PasseiosNauticos from './components/passeio';
import ToursList from './components/tourList';
import Footer from './components/footer';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          
        <div className="relative w-100 h-120">
        <a href="/" className="text-white text-2xl font-bold">
              <Image  className="w-full h-62 object-cover object-center"
                src={'/BomBordo.png'} width={100} height={100} alt={'passeios naúticos alagoas'} ></Image>
        </a>
          </div>
          
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-lg lg:flex-grow">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Tours
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>


      <PasseiosNauticos />
      <ToursList />
      <Footer/>
    
    </>
  );
};

export default Navbar;
