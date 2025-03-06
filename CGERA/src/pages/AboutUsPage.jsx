import React from 'react';

const AboutUs = () => {
  return (
    <div
      className="bg-yellow-400 col-span-5 flex flex-col justify-center items-center mx-5"
      data-aos="fade-right"
    >
      <header className="w-full bg-blue-600 text-white shadow-md rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold">Acerca de Nosotros</h1>
        <p className="mt-2 text-lg">
          Conoce más sobre la Confederación General Económica.
        </p>
      </header>

      <section className="w-full max-w-6xl mt-8">
        <p className="text-gray-600">
          Esta sección aún está en construcción...
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
