import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-blue-400 col-span-5 row-span-1 m-1 flex justify-between items-center p-4 rounded-2xl shadow-md">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10" />
        <span className="text-xl font-bold">
          CONFEDERACIÓN GENERAL ECONÓMICA
        </span>
      </div>
      <div className="space-x-6">
        <a href="#" className="hover:underline">
          Acerca de Nosotros
        </a>
        <a href="#" className="hover:underline">
          Presentación
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
