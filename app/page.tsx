"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import PasseiosTexto from './components/passeio';
import ToursList from './components/tourList';
import Footer from './components/footer';
import BackgroundVideo from './components/BackgroundVideo';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-[#3155A4] border-solid border-b-8">
        <div className="container mx-auto flex justify-between items-center">
          
        <div className="relative w-100 h-120">
        <a href="/" className="text-white text-2xl font-bold">
              <Image  className="w-full h-62 object-cover object-center"
                src={'/BomBordo.png'} width={70} height={70} alt={'Passeios Porto de galinhas'} ></Image>
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
          <div className="text-lg lg:flex-grow p-4">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Nós
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4"
            >
              Pesseios
            </a>
         
              
              <Link aria-label="Chat on WhatsApp" href={"https://wa.me/5581996146853"} target="_blank"  passHref>
              
              Whats
           </Link>
          </div>
        </div>
      </div>
    </nav>
     

<BackgroundVideo />
      <div className="content">
        <h1>BEM VINDO A BORDO!</h1>
        <p className="passeios">PASSEIOS EM PORTO DE GALINHAS.</p>
      </div>
      <style jsx>{`
        .content {
          position: relative;
          z-index: 1;
          color: white;
          text-align: center;
          padding-top: 50vh;
        }
        .passeios{
          margin-top:-315px;
          font-size:4em;
        }
      `}</style>

      <PasseiosTexto />
      <ToursList />
      <Footer/>
    
    </>
  );
};

export default Navbar;
