import React from 'react';

const PasseiosNauticos = () => {
  return (
    <div className="bg-blue-100 p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Descubra as Maravilhas Náuticas de Alagoas! 🚤☀️
      </h2>
    
    
      {/* Barco Exclusivo */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Barco Exclusivo para 6 Pessoas:</h3>
        <p>Desfrute de um dia incrível com amigos ou familiares...</p>
      </div>
      {/* Reserva */}
      <div>
        <p>
          Seja para apreciar a vista panorâmica da Lagoa Mundaú ou relaxar nas
          praias deslumbrantes, garantimos uma experiência náutica inesquecível.
          Reserve sua diária agora e prepare-se para uma jornada de descobertas
          e diversão!
        </p>
        <p className="text-lg font-semibold mt-4">
          Viva a Magia dos Passeios Náuticos em Alagoas! 🌴
        </p>
      </div>
    </div>
  );
};

export default PasseiosNauticos;
