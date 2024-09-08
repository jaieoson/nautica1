import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="rodape">
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <h3 className="text-lg font-semibold mb-2">E-mail</h3>
          <p>contato@aportodegalinhas.com.br</p>
          
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
         
          <Image width={300} height={350}
              src={'/logo-cadastur.png'}
              alt={'cadastour'}
              className="w-full h-32 object-cover object-center"
            />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <h3 className="text-lg font-semibold mb-2">Mapa do Site</h3>
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/tours">Passeios</a></li>
            <li>
              
            <Link aria-label="Chat on WhatsApp" href={"https://wa.me/5581996146853"} target="_blank"  passHref>
            Contato  
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;