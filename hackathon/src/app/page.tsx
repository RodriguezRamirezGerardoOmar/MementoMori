import React from 'react';
//import HeaderMenu from '@/app/components/HeaderMenu';
import CardLandingComponent from './components/CardLandingComponent';
import BannerComponent from './components/BannerComponent';
import LogoComponent from './components/LogoComponent';
import HeaderMenu from './components/HeaderMenu'



const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-white">
      <HeaderMenu/>
      <LogoComponent/>
      <div>   
      <BannerComponent
          title="Conoce la salud financiera de tu negocio"
          subtitle="Administra tu negocio con Microgestor"
          features={[
            'Conoce tus gastos, costos, inventario y',
            'administra tu negocio con Microgestor',
          ]}
        />    
      </div>
      <main className="px-4 py-2 flex-grow bg-white">
        <CardLandingComponent/>
        <CardLandingComponent/>
        <CardLandingComponent/>
      </main>
    </div>
  );
};

export default HomePage;
