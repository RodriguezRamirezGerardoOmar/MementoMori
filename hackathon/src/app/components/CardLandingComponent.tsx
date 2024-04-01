import React from 'react';
import MoreButton from './ButtonVerMasComponent'; 

const CardLandingComponent: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto rounded overflow-hidden shadow-lg text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 md:p-6 my-12">
      <div className="mb-4 pt-12">
        {/* Aquí pondrías tu imagen ilustrativa */}
      </div>
      <h2 className="text-lg md:text-xl mb-2 font-bold">Digitaliza tu negocio</h2>
      <p className="text-sm md:text-base mb-4">
        Transforma tu empresa con Microgestor, la plataforma intuitiva que te lleva al ámbito digital, simplificando la gestión financiera sin necesidad de grandes conocimientos en finanzas o tecnología.
      </p>
      <MoreButton />
    </div>
  );
};

export default CardLandingComponent;
