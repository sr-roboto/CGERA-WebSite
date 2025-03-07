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
          La Confederación General Empresaria se fundó el 4 de octubre del 2007
          en la Casa de la Provincia de Tucumán donde se firmó el acta
          constitutiva. Desde entonces, la CGERA nace como una expresión de un
          numeroso grupo de cámaras pymes de todo el país que venían trabajando
          en conjunto necesitaban de una entidad que las contenga y represente.
          Sectores de la industria, la producción, el comercio y los servicios
          más una gran cantidad de entidades provinciales lograron darle a CGERA
          el carácter PyME, federal y multisectorial que aún conserva al día de
          hoy. Durante estos años la CGERA ha participado activamente en los
          espacios donde se definen las políticas e iniciativas dirigidas al
          sector, interactuando con el sector público en defensa de las pequeñas
          y medianas empresas nacionales. Al día de hoy CGERA agrupa más de 40
          cámaras sectoriales, posee representatividad en todo el territorio
          nacional por medio de federaciones, asociaciones o cámaras
          provinciales y posee cuatro regionales en el conurbano bonaerense.
          Esto se logró con el trabajo de muchos hombres y mujeres que hoy
          siguen haciendo de CGERA una entidad que crece, que es representativa,
          federal y defiende los intereses de las pequeñas y medianas empresas
          argentinas.
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
