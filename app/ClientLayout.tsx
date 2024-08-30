// app/ClientLayout.tsx (composant côté client)
"use client"; // Indiquer que ce composant est côté client

import React, { useEffect } from 'react';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    //document.addEventListener('contextmenu', disableRightClick);

    // Nettoyer l'écouteur d'événements lorsqu'il n'est plus nécessaire
    return () => {
      //document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
