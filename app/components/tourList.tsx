/* eslint-disable react/no-children-prop */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlueButton from './botao';

const toursData = [
  {
    id: 1,
    title: 'Mergulho com cilindro',
    description: 'Batismo: Duração: 20 minutos submerso, Fotos: 20 fotos subaquáticas, Aulas: Teórica e prática, Transporte: Traslado de jangada, Preço: R$ 120 por pessoa.',
    imageUrl: '/m1.jpg',
  },
  {
    id: 2,
    title: 'Passeio de Buggy',
    description: 'Passeio pelas praias de Muro Alto, Cupê, Porto de Galinhas, Maracaípe e Pontal de Maracaípe. Fotos inclusas e ilimitadas durante todo o trajeto do buggy.',
    imageUrl: '/b2.jfif',
  },
  {
    id: 3,
    title: 'Voo de paramortor',
    description: '15 minutos no ar Vôo com saída no coqueiral de Maracaípe, indo até as piscinas naturais de Porto de Galinhas e de volta até o coqueiral de Maracaípe. R$ 350,00 por pessoa',
    imageUrl: '/b4.avif',
  },
  {
    id: 4,
    title: 'Voo de helicóptero',
    description: 'Desfrute de uma vista deslumbrante de Porto de Galinhas com um passeio de helicóptero! Por apenas R$399,00, você sobrevoa as piscinas naturais, Praia do Cupe e Pontal de Maracaípe em 7 minutos inesquecíveis. Uma experiência única que você não pode perder! 🚁✨',
    imageUrl: '/helicoptero.jpeg',
  },
  {
    id: 5,
    title: 'Aluguel de Quariciclo',
    description: 'Explore paisagens incríveis com nosso passeio de quadriciclo! Por apenas R$250,00, você terá 1h30min de pura aventura, pilotando por trilhas emocionantes e cenários deslumbrantes. Ideal para quem busca adrenalina e contato com a natureza. Não perca essa oportunidade de viver uma experiência única e inesquecível em Porto de Galinhas! 🌿🏞️',
    imageUrl: '/quariciclo.jpg',
  },
  {
    id: 6,
    title: 'Guia tradutor',
    description: '15 minutos no ar Vôo com saída no coqueiral de Maracaípe, indo até as piscinas naturais de Porto de Galinhas e de volta até o coqueiral de Maracaípe. R$ 350,00 por pessoa',
    imageUrl: '/b4.avif',
  },
  {
    id: 7,
    title: 'Praia de Maragogi',
    description: 'Descubra as maravilhas de Maragogi com um passeio incrível saindo de Porto de Galinhas! Por apenas R$150,00 por pessoa, você desfruta de um dia inesquecível nas piscinas naturais, com águas cristalinas e paisagens de tirar o fôlego. Aproveite essa oportunidade para explorar o “Caribe Brasileiro” e criar memórias inesquecíveis! 🌊🌴',
    imageUrl: '/maragogi.jpg',
  },
  {
    id: 8,
    title: 'Praia dos Carneiros',
    description: 'Viva uma experiência paradisíaca na Praia dos Carneiros! Por apenas R$110,00 por pessoa, você desfruta de um dia inteiro em uma das praias mais belas do Brasil. Relaxe nas águas cristalinas, explore as piscinas naturais e visite a icônica Igreja de São Benedito. Um passeio imperdível para quem ama a natureza e a tranquilidade! 🌴🌊',
    imageUrl: '/praiadoscarneiros.png',
  },
  {
    id: 9,
    title: 'City Tour Recife e Olinda ',
    description: 'Descubra a rica história e cultura de Recife e Olinda com nosso city tour! Por apenas R$100,00 por pessoa, você visitará os principais pontos turísticos, como o Marco Zero, a Rua do Bom Jesus, o Alto da Sé e muito mais. Uma viagem fascinante pelo passado e presente dessas cidades encantadoras. Não perca essa oportunidade única! 🏛️🌆',
    imageUrl: '/citytourrecifeolinda.webp',
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
              <br></br><br></br>
             
              <Link aria-label="Chat on WhatsApp" href={"https://wa.me/5581996146853?text=Tenho interesse no " +tour.title} target="_blank"  passHref>
                
                <Image width={500} height={280} alt="Chat on WhatsApp" src="/whats1.png" />
              </Link>
            </div>
          </div>
        </div>
      ))}


   
    </div>
  );
};

export default ToursList;
