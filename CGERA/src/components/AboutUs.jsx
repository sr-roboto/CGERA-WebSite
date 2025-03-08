import React from 'react';
import { History, Users, Target, Award, PlayCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const authorities = [
  {
    id: 1,
    name: 'Dr. Maria Rodriguez',
    role: 'Presidente',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'John Martinez',
    role: 'Vice Presidente',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    role: 'Secretaria General',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const AboutPage = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="News Header"
          />
          <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-75" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Quiénes Somos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90 mb-8"
          >
            Conoce a CGERA, la organización que representa y defiende los
            intereses de las pequeñas y medianas empresas en Argentina.
          </motion.p>
        </div>
      </div>
      {/* Historia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:text-center">
              <History
                className="mx-auto h-12 w-12 text-blue-600"
                color="#418CBD"
              />
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                Nuestra Historia
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center ">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="mt-2 text-lg font-extrabold text-gray-800 sm:text-2xl">
                  Confederación General Económica (CGE)
                </h3>
                <p className="mt-4 max-w-3xl mx-auto text-5sm text-gray-500">
                  La Confederación General Económica es una entidad empresaria
                  de cuarto grado, integrada por Confederaciones Nacionales y
                  Federaciones Empresarias de las 23 provincias y la Ciudad
                  Autónoma de Buenos Aires. Su objetivo principal es la defensa
                  de las Pequeñas y Medianas Empresas. Fue fundada el 16 de
                  agosto de 1952 por José Ber Gelbard, Ministro de Economía de
                  la tercera presidencia de Juan Domingo Perón.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="mt-2 text-lg font-extrabold text-gray-800 sm:text-2xl">
                  Pacto Social
                </h3>
                <p className="mt-4 max-w-3xl mx-auto text-5sm text-gray-500">
                  El Pacto Social fue un acuerdo firmado por los miembros de la
                  CGT (Confederación General del Trabajo) y la CGE el 8 de junio
                  de 1973 con la finalidad de concertar al Gobierno Nacional con
                  la Industria y los Sindicatos en pos de conseguir la
                  recuperación económica. Anteriormente, en mayo de 1973, fue
                  presentado el Programa de Reconstrucción y Liberación
                  Nacional, conocido, en términos generales como "Plan Gelbard",
                  el que se proponía sostener el crecimiento de la economía
                  apoyándose en una expansión del mercado interno y el
                  crecimiento de las exportaciones.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mision, Vision, valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="lg:text-center">
              <Target
                className="mx-auto h-12 w-12 text-blue-600"
                color="#418CBD"
              />
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                Misión & Visión
              </h2>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Mission
                  </h3>
                  <p className="text-gray-600">
                    Participar en todos los espacios donde se debatan políticas
                    e iniciativas relacionadas con las pequeñas y medianas
                    empresas, defendiendo sus intereses y promoviendo su
                    desarrollo.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Visión
                  </h3>
                  <p className="text-gray-600">
                    Ser la entidad más representativa de los sectores pymes de
                    la industria, los servicios y la producción, con presencia
                    en todo el territorio de la República Argentina.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Valores
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Empresarios que impulsan el crecimiento</li>
                    <li>• Pymes como motor del desarrollo</li>
                    <li>• Necesidades compartidas, soluciones conjuntas</li>
                    <li>• Equipo que construye el futuro</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Autoridades*/}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="lg:text-center">
              <Users
                className="mx-auto h-12 w-12 text-blue-600 "
                color="#418CBD"
              />
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                Nuestras Autoridades
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Conozca a los profesionales experimentados que lideran a CGERA
                hacia un futuro de innovación y crecimiento.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {authorities.map((authority) => (
                  <div
                    key={authority.id}
                    className="bg-white overflow-hidden shadow-lg rounded-lg"
                  >
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="w-full h-64 object-cover"
                        src={authority.image}
                        alt={authority.name}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {authority.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {authority.role}
                      </p>
                      <p className="mt-3 text-gray-500">
                        {authority.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
