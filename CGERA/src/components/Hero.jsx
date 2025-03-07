import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-blue-600 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
          alt="Business people collaborating"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-90" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Bienvenido a CGERA
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl sm:text-2xl">
          CGERA (Confederación General Empresaria de la República Argentina)
          Fundada el 4 de octubre de 2007, CGERA nace como una expresión de un
          numeroso grupo de cámaras pymes de todo el país que necesitaban una
          entidad que las represente.
        </p>
      </div>
    </div>
  );
};

export default Hero;
