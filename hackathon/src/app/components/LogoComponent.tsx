// components/LogoComponent.tsx
import React from 'react';
import Image from 'next/image';

const LogoComponent: React.FC = () => {
  return (
    <div className="flex items-center pb-12 pl-12 pt-7 ">
      <div className="bg-indigo-800 text-white rounded-full p-10">
        {/* Aquí utilizarías Image de Next.js para el logo, si tienes una imagen. De lo contrario, puedes poner texto o un ícono SVG */}
      </div>
      <div className="ml-2 pl-24">
        <h1 className="text-xl font-semibold text-black">Microgestor</h1>
        <p className="text-sm text-gray-600">business management app</p>
      </div>
    </div>
  );
};

export default LogoComponent;
