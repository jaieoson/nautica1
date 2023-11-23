import React from 'react';
import Image from 'next/image';

const toursData = [
  {
    id: 1,
    title: 'Passeio na Lagoa',
    description: 'Navegue pelas águas serenas da Lagoa Mundaú, uma experiência única em Alagoas. 🚤✨.',
    imageUrl: '/barco1.png',
  },
  {
    id: 2,
    title: 'Passeio Prainha',
    description: 'Da serenidade da Lagoa Mundaú à beleza intocada da Prainha: seu passeio dos sonhos. 🏞️🚤',
    imageUrl: '/barco1.png',
  },
  {
    id: 3,
    title: 'Praia do saco',
    description: 'Explore a exuberância da Lagoa Mundaú à agitação da Praia do Francês. Uma jornada inesquecível. 🏝️🚤',
    imageUrl: '/barco1.png',
  },
];

const ToursList = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center">
      {toursData.map((tour) => (
        <div
          key={tour.id}
          className="w-full md:w-1/2 lg:w-1/3 p-4"
        >
          <div className="bg-white rounded-md overflow-hidden shadow-lg">
            <Image width={300} height={350}
              src={tour.imageUrl}
              alt={tour.title}
              className="w-full h-62 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{tour.title}</h2>
              <p className="text-gray-600">{tour.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToursList;
