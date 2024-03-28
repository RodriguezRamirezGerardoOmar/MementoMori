import React from "react";

interface CardInventarioProps {
  nombre: string;
  precio: number;
  cantidad: number;
  imagenSrc: string;
}

const CardInventarioComponent: React.FC<CardInventarioProps> = ({
  nombre,
  precio,
  cantidad,
  imagenSrc,
}) => {
  return (
    <div className="bg-[#f4f4f4] rounded-[8px] p-2 mb-4 flex flex-row">
      <div>
        <img
          src={imagenSrc}
          alt="Imagen de producto"
          className="w-[160px] mr-4"
        />
      </div>
      <div className="text-black">
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Cantidad: {cantidad}</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardInventarioComponent;
