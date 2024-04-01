import React from 'react';


interface BannerProps {
  title: string;
  subtitle: string;
  features: string[];
}

const BannerComponent: React.FC<BannerProps> = ({ title, subtitle, features}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
        <ul className="list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index} className="mt-2 text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>
      <div className= "bg-indigo-800 text-white  p-10 w-72 pb-7">
        
      </div>
    </div>
  );
};

export default BannerComponent;