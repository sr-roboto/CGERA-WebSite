import React from 'react';
import {
  History,
  Users,
  Target,
  Award,
  PlayCircle,
  Factory,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import MarceloOrtega from '../assets/marcelo-ortega.jpeg';

const authorities = [
  {
    id: 1,
    name: 'Marcelo Ortega',
    role: 'Presidente de CGERA',
    image: `${MarceloOrtega}`,
    description:
      'Empresario. Presidente de Cierres Lynsa. Presidente de CGERA y CAFAICYM. Diputado Nacional por la Provincia de Buenos Aires (2005-2009).',
  },
  {
    id: 2,
    name: 'John Martinez',
    role: 'Vice Presidente de CGERA',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'Experto en estrategias de innovación y transformación digital para empresas modernas.',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    role: 'Secretaria General',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    description:
      'Especializada en relaciones internacionales y alianzas estratégicas.',
  },
];

const associates = [
  {
    id: 1,
    name: 'CICA',
    description: 'Cámara Curtidora.',
  },
  {
    id: 2,
    name: 'CAHFESA',
    description:
      'Cámara de Fabricantes de Herramientas, Ferretería, Electricidad, Sanitarios y Afines.',
  },
  {
    id: 3,
    name: 'AGIRA SA',
    description: 'Empresa de Oil y Gas.',
  },
  {
    id: 4,
    name: 'ERNESTO MAYER SA',
    description: 'Empresa de Circuitos Impresos.',
  },
  {
    id: 5,
    name: 'GRANJA TRES ARROYOS SA',
    description: 'Empresa de Alimentos.',
  },
  {
    id: 6,
    name: 'RANIERI ARG SA',
    description: 'Empresa de Producción y Comercialización de Anteojos.',
  },
  {
    id: 7,
    name: 'EXINTRADER SA',
    description: 'Empresa de Importación y Distribución de Autopartes.',
  },
  {
    id: 8,
    name: 'EAYA CONSULTING SA',
    description: 'Empresa Consultora.',
  },
  {
    id: 9,
    name: 'AIERA',
    description: 'Asociación de Importadores y Exportadores de Argentina.',
  },
  {
    id: 10,
    name: 'ADEL',
    description: 'Asociación de Empresas de Limpieza.',
  },
  {
    id: 11,
    name: 'CERAMICA ALBERDI SA',
    description: 'Empresa de Pisos y Revestimientos.',
  },
  {
    id: 12,
    name: 'CADIOA',
    description: 'Cámara de Industrias Ópticas y Afines.',
  },
  {
    id: 13,
    name: 'CADIME',
    description: 'Cámara de Instituciones de Diagnóstico Médico.',
  },
  {
    id: 14,
    name: 'CAF',
    description: 'Cámara Argentina de Feedlot.',
  },
  {
    id: 15,
    name: 'CAIPIC',
    description: 'Cámara de Proveedores de la Industria del Calzado.',
  },
  {
    id: 16,
    name: 'CATGRA',
    description: 'Cámara de Fabricantes de Tintas Gráficas.',
  },
  {
    id: 17,
    name: 'CASEL',
    description: 'Cámara de Seguridad Electrónica.',
  },
  {
    id: 18,
    name: 'CEPA',
    description: 'Centro de Empresas Procesadoras Avícolas.',
  },
  {
    id: 19,
    name: 'CIC',
    description: 'Cámara de la Industria del Calzado.',
  },
  {
    id: 20,
    name: 'CIMA',
    description: 'Cámara de la Industria Manufacturera del Cuero y Afines.',
  },
  {
    id: 21,
    name: 'FACAF',
    description: 'Federación Argentina de Cámaras de Farmacias.',
  },
  {
    id: 22,
    name: 'CAEFA',
    description: 'Cámara de Empresas de Fuegos Artificiales.',
  },
  {
    id: 23,
    name: 'CASWEATER',
    description: 'Cámara del Sweater.',
  },
  {
    id: 24,
    name: 'ACARA',
    description:
      'Asociación de Concesionarios de Oficiales Automotores de Argentina.',
  },
  {
    id: 25,
    name: 'CGCYS',
    description: 'Confederación General de Comercio y Servicios de Argentina.',
  },
  {
    id: 26,
    name: 'CAFAICYM',
    description:
      'Cámara Argentina de Fabricantes de Avíos e Insumos para Confección y Marroquinería.',
  },
  {
    id: 27,
    name: 'MAROLIO SA',
    description: 'Empresa de Producción de Bienes de Consumo Masivo.',
  },
  {
    id: 28,
    name: 'FECIBA',
    description: 'Federación Económica de la Ciudad de Buenos Aires.',
  },
  {
    id: 29,
    name: 'ROSSO ASESOR Y PROD',
    description: 'Empresa de Seguros.',
  },
  {
    id: 30,
    name: 'ALGOSELAN FLANDRIA SA',
    description: 'Empresa Mayorista Textil.',
  },
  {
    id: 31,
    name: 'CAEDE',
    description: 'Cámara Argentina de Empresas Demoladoras y Excavadoras.',
  },
  {
    id: 32,
    name: 'CECAF',
    description: 'Cámara de Empresas de Conservación de Ascensores y Afines.',
  },
  {
    id: 33,
    name: 'PUERTO RAWSON PATAG SA',
    description: 'Empresa de Captura y Procesamiento de Pesca.',
  },
  {
    id: 34,
    name: 'CADMIPYA',
    description:
      'Cámara Argentina de Distribuidores Mayoristas de Informática, Productos y Afines.',
  },
  {
    id: 35,
    name: 'CCAER',
    description: 'Cámara de Comercio Automotor de Entre Ríos.',
  },
  {
    id: 36,
    name: 'CCARPA',
    description: 'Cámara de Comercio Argentino-Paraguaya.',
  },
  {
    id: 37,
    name: 'BENNY PEN ARG SA',
    description: 'Empresa de Artículos de Escritura.',
  },
  {
    id: 38,
    name: 'CAPYMA',
    description:
      'Cámara Argentina de Pequeñas y Medianas Empresas de la Industria Alimenticia y Bebidas.',
  },
  {
    id: 39,
    name: 'CASRECH',
    description: 'Cámara de Autoservicios y Supermercados Residentes Chinos.',
  },
  {
    id: 40,
    name: 'GELVEZ SRL',
    description:
      'Empresa de Servicios Industriales, Ingeniería y Construcción.',
  },
  {
    id: 41,
    name: 'LOMAS DEL SOL SRL',
    description: 'Empresa de Ingeniería en Nutrición Animal.',
  },
  {
    id: 42,
    name: 'FLEXATEC SRL',
    description:
      'Empresa de Fabricación y Distribución de Componentes para Transporte de Movimiento.',
  },
  {
    id: 43,
    name: 'CAIFA',
    description: 'Cámara Argentina de la Industria de Fricción.',
  },
  {
    id: 44,
    name: 'CAPIPE',
    description:
      'Cámara Argentina de Proveedores de la Industria Petroenergética.',
  },
  {
    id: 45,
    name: 'COOPERALA',
    description: 'Cámara de Empresas Laboratorios Farmacéuticos.',
  },
];

const AboutUsPage = () => {
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
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Misión
                  </h3>
                  <p className="text-gray-600">
                    Participar en todos los espacios donde se debatan políticas
                    e iniciativas relacionadas con las pequeñas y medianas
                    empresas, defendiendo sus intereses y promoviendo su
                    desarrollo.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Visión
                  </h3>
                  <p className="text-gray-600">
                    Ser la entidad más representativa de los sectores pymes de
                    la industria, los servicios y la producción, con presencia
                    en todo el territorio de la República Argentina.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
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

      {/* Authorities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Users
              className="mx-auto h-12 w-12 text-blue-600"
              color="#418CBD"
            />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Autoridades
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Español Conozca a los profesionales experimentados que lideran a
              CGERA hacia un futuro de innovación y crecimiento.
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
        </div>
      </section>

      {/* Asociaciones*/}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="lg:text-center">
              <Factory
                className="mx-auto h-12 w-12 text-blue-600 "
                color="#418CBD"
              />
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                Asociados
              </h2>
              <p className="mt-4  text-xl text-gray-500 text-center">
                Entidades, Cámaras, Empresas y Federaciones representadas por
                CGERA
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-2 gap-0.5 lg:grid-cols-3 ">
                {associates.map((associates) => (
                  <div
                    key={associates.id}
                    className=" overflow-hidden shadow-lg rounded-lg hover:bg-gray-100"
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="w-full h-64 object-cover"
                        src={authority.image}
                        alt={authority.name}
                      />
                    </div> */}
                      <div className="p-4 text-md sm:text-xl">
                        <h3 className=" font-semibold max-w-lg text-md text-gray-800">
                          {associates.name}:
                        </h3>
                        {/* <p className="text-blue-600 font-medium">
                        {authority.role}
                      </p> */}
                        <p className=" text-gray-500 capitalize font-medium text-wrap max-w-md">
                          {associates.description}
                        </p>
                      </div>
                    </motion.div>
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

export default AboutUsPage;
