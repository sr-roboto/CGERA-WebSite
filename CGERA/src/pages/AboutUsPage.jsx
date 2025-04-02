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
import auth1 from '../assets/authorities/1.jpg';
import auth2 from '../assets/authorities/2.jpg';
import auth3 from '../assets/authorities/3.jpg';
import auth4 from '../assets/authorities/4.jpg';
import auth5 from '../assets/authorities/5.jpg';
import auth6 from '../assets/authorities/6.jpg';
import auth7 from '../assets/authorities/7.jpg';
import auth8 from '../assets/authorities/8.jpg';
import auth9 from '../assets/authorities/9.jpg';
import auth10 from '../assets/authorities/10.jpg';
import auth11 from '../assets/authorities/11.jpg';
import auth12 from '../assets/authorities/12.jpg';
import auth13 from '../assets/authorities/13.jpg';
import auth14 from '../assets/authorities/14.jpg';
import auth15 from '../assets/authorities/15.jpg';
import auth16 from '../assets/authorities/16.jpg';
import auth17 from '../assets/authorities/17.jpg';
import auth18 from '../assets/authorities/18.jpg';
import auth19 from '../assets/authorities/19.jpg';
import auth20 from '../assets/authorities/20.jpg';
import auth21 from '../assets/authorities/21.jpg';
import auth22 from '../assets/authorities/22.jpg';
import auth23 from '../assets/authorities/23.jpg';
import auth24 from '../assets/authorities/24.jpg';
import auth25 from '../assets/authorities/25.jpg';
import auth26 from '../assets/authorities/26.jpg';
import auth27 from '../assets/authorities/27.jpg';
import auth29 from '../assets/authorities/29.jpg';
import auth30 from '../assets/authorities/30.jpg';
import auth31 from '../assets/authorities/31.jpg';
import auth32 from '../assets/authorities/32.jpg';
import auth33 from '../assets/authorities/33.jpg';
import auth34 from '../assets/authorities/34.jpg';
import auth35 from '../assets/authorities/35.jpg';
import auth36 from '../assets/authorities/36.jpg';
import auth37 from '../assets/authorities/37.jpg';
import auth38 from '../assets/authorities/38.jpg';
import auth39 from '../assets/authorities/39.jpg';
import auth40 from '../assets/authorities/40.jpg';
import auth41 from '../assets/authorities/41.jpg';
import auth42 from '../assets/authorities/42.jpg';
import auth43 from '../assets/authorities/43.jpg';
import auth45 from '../assets/authorities/45.jpg';
import auth46 from '../assets/authorities/46.jpg';
import auth47 from '../assets/authorities/47.jpg';
import auth48 from '../assets/authorities/48.jpg';
import auth49 from '../assets/authorities/49.jpg';
import auth50 from '../assets/authorities/50.jpg';
import auth51 from '../assets/authorities/51.jpg';
import auth52 from '../assets/authorities/52.jpg';
import auth53 from '../assets/authorities/53.jpg';
import auth55 from '../assets/authorities/55.jpg';

const authorities = [
  {
    id: 1,
    name: 'Marcelo Omar Fernandez',
    role: 'Presidente',
    image: auth1,
    description:
      'CAFAICYM - CÁMARA ARGENTINA DE FABRICANTES DE AVIOS Y ACCESORIOS PARA LA CONFECCIÓN Y MARROQUINERIA',
    email: 'marcelo.lyn@gmail.com',
  },
  {
    id: 2,
    name: 'Pedro Guillermo Bergaglio',
    role: 'Vicepresidente 1°',
    image: auth2,
    description:
      'CASWEATER - CAMARA ARGENTINA DE EMPRESAS DE LA INDUSTRIA DEL SWEATER',
    email: 'pedrobergaglio@hotmail.com',
  },
  {
    id: 3,
    name: 'Raul Eduardo Zylbersztein',
    role: 'Vicepresidente 2°',
    image: auth3,
    description: 'CGCYS - Conf Gral de Comercio y Serv',
    email: 'raulzyl@gmail.com',
  },
  {
    id: 4,
    name: 'Mariel Cecilia Adela Paz',
    role: 'Vicepresidente 3°',
    image: auth4,
    description:
      'ACARA - Asociación de Concesionarios de Automotores de la República Argentina',
    email: 'marielcpaz@icloud.com',
  },
  {
    id: 5,
    name: 'Juan Nicolas Fera',
    role: 'Vicepresidente 4°',
    image: auth5,
    description:
      'CGERA PROV BS AS - Confederación General Empresaria de la República Argentina',
    email: 'juancito@marolio.com',
  },
  {
    id: 6,
    name: 'Ariel Fernando Aguilar',
    role: 'Vicepresidente 5°',
    image: auth6,
    description:
      'CGERA MORON - Confederación General Empresaria de la República Argentina',
    email: 'arielaguilar@corium.com.ar',
  },
  {
    id: 7,
    name: 'Marcelo Abel Girard',
    role: 'Secretario',
    image: auth7,
    description: 'CAM TINTAS GRAF - Cámara de Tintas Gráficas',
    email: 'marcelogirard.cotigraf@gmail.com',
  },
  {
    id: 8,
    name: 'Alfredo Luis Vila',
    role: 'Pro Secretario 1°',
    image: auth8,
    description: 'FAGODA - FEDERACION DE GANADO',
    email: 'vilaalfredo.s@gmail.com',
  },
  {
    id: 9,
    name: 'Veronica Wejchenberg',
    role: 'Pro Secretario 2°',
    image: auth9,
    description:
      'CGERA MORON - Confederación General Empresaria de la República Argentina',
    email: 'cgeramoron@gmail.com',
  },
  {
    id: 10,
    name: 'Facundo Marcelo Girard',
    role: 'Tesorero',
    image: auth10,
    description: 'FECIBA - FEDERACIÓN ECONÓMICA DE LA CIUDAD DE BUENOS AIRES',
    email: 'FACUNDOGIRARD@GMAIL.COM',
  },
  {
    id: 11,
    name: 'Sandra Estela Nicolas',
    role: 'Pro Tesorero 1°',
    image: auth11,
    description: 'FECIBA - FEDERACIÓN ECONÓMICA DE LA CIUDAD DE BUENOS AIRES',
    email: 'loulou1424@gmail.com',
  },
  {
    id: 12,
    name: 'Norma Rios',
    role: 'Pro Tesorero 2°',
    image: auth12,
    description:
      'CAMEFOR - Cámara de Mujeres Empresarias y Profesionales de Formosa',
    email: 'normariosmar@gmail.com',
  },
  {
    id: 13,
    name: 'Horacio Antonio Moschetto',
    role: 'Vocal Titular 1°',
    image: auth13,
    description: 'CIC - Cámara de la Industria del Calzado',
    email: 'cic@camara-calzado.org.ar',
  },
  {
    id: 14,
    name: 'Sandra Elizabeth Rey',
    role: 'Vocal Titular 2°',
    image: auth14,
    description:
      'CGERA ITUZAINGO - Confederación General Empresaria de la República Argentina',
    email: 'sandraerey@gmail.com',
  },
  {
    id: 15,
    name: 'Mauro Javier Gonzalez',
    role: 'Vocal Titular 3°',
    image: auth15,
    description:
      'CGERA PROV BS AS - Confederación General Empresaria de la República Argentina',
    email: 'maurogonzalez@zadig.com.ar',
  },
  {
    id: 16,
    name: 'Guillermo Eduardo Gomez Galizia',
    role: 'Vocal Titular 4°',
    image: auth16,
    description:
      'CADIME - Cámara Argentina de Distribuidores de Materiales eléctricos',
    email: 'cadime@cadime.com.ar',
  },
  {
    id: 17,
    name: 'Juan Alejandro Bosch',
    role: 'Vocal Titular 5°',
    image: auth17,
    description:
      'CAIFA - Cámara de la Industria Argentina de Fertilizantes y Agroquímicos',
    email: 'jabosch@fri-ma.com.ar',
  },
  {
    id: 18,
    name: 'Norberto Fermani',
    role: 'Vocal Titular 6°',
    image: auth18,
    description: 'CADIOA - Cámara Argentina de industrias ópticas y afines',
    email: 'nfermani@gmail.com',
  },
  {
    id: 19,
    name: 'Julian Moreno',
    role: 'Vocal Titular 7°',
    image: auth19,
    description: 'APYME - Asamblea de Pequeños y Medianos Empresarios',
    email: 'jm@kioshi.com.ar',
  },
  {
    id: 20,
    name: 'Pedro Vicente Uribarrena',
    role: 'Vocal Titular 8°',
    image: auth20,
    description: 'FAGODA - FEDERACION DE GANADO',
    email: 'pedro@uridesarrollos.com.ar',
  },
  {
    id: 21,
    name: 'Maria Antonieta Lovece',
    role: 'Vocal Titular 9°',
    image: auth21,
    description:
      'CAFAICYM - CÁMARA ARGENTINA DE FABRICANTES DE AVIOS Y ACCESORIOS PARA LA CONFECCIÓN Y MARROQUINERIA',
    email: 'malovece150@gmail.com',
  },
  {
    id: 22,
    name: 'Ornella Calvete',
    role: 'Vocal Titular 10°',
    image: auth22,
    description:
      'CAPYMA - Cámara Arg de la Pequeña y Mediana Industria de la Alimentación',
    email: 'calveteornella@gmail.com',
  },
  {
    id: 23,
    name: 'Ruben Fernando Quintero',
    role: 'Vocal Titular 11°',
    image: auth23,
    description:
      'CASRECH - Cámara de Autoservicios y Supermercados de Residentes Chinos',
    email: 'fernandoquintero@fibertel.com.ar',
  },
  {
    id: 24,
    name: 'Roberto Alfredo Yacuzzi',
    role: 'Vocal Titular 12°',
    image: auth24,
    description:
      'UCI SAN LORENZO - UNIÓN DE COMERCIANTES E INDUSTRIALES DEL DPTO. SAN LORENZO',
    email: 'ucisanlorenzo@yahoo.com.ar',
  },
  {
    id: 25,
    name: 'María Ester Bower Pelozo',
    role: 'Vocal Titular 13°',
    image: auth25,
    description: 'CAMEM - Cámara de Mujeres Empresarias de Misiones',
    email: 'mbowerpelozo@gmail.com',
  },
  {
    id: 26,
    name: 'Juan Carlos Pereyra',
    role: 'Vocal Titular 14°',
    image: auth26,
    description:
      'AIERA - Asociación de Importadores y Exportadores de la República Argentina',
    email: 'jcpereyra@jcpcargo.com',
  },
  {
    id: 27,
    name: 'Jorge Osvaldo Metri',
    role: 'Vocal Titular 15°',
    image: auth27,
    description:
      'APYMEP - Asociación de Pequeñas y Medianas Empresas y Profesionales',
    email: 'jmetri28@gmail.com',
  },
  {
    id: 28,
    name: 'Eduardo Emilio Wylder',
    role: 'Vocal Titular 16°',
    image: 'https://via.placeholder.com/500x500.png?text=Eduardo+Wylder',
    description: 'CICA - Cámara de la Industria Curtidora Argentina',
    email: 'ewydler@cica.org.ar',
  },
  {
    id: 29,
    name: 'Ruben Alberto Pallone',
    role: 'Vocal Titular 17°',
    image: auth29,
    description:
      'CIMA - Cámara Industrial de la Manufactura del Cuero y Afines de la República Argentina',
    email: 'presidencia@cuerocima.com.ar',
  },
  {
    id: 30,
    name: 'Justina Almiron Gayoso',
    role: 'Vocal Titular 18°',
    image: auth30,
    description:
      'CAMEFOR - Cámara de Mujeres Empresarias y Profesionales de Formosa',
    email: 'puesto21.formosa@hotmail.com',
  },
  {
    id: 31,
    name: 'Daniel German Reffatti',
    role: 'Vocal Titular 19°',
    image: auth31,
    description: 'CCAER - CAMARA ARGENTINA DE ENERGIAS RENOVABLES',
    email: 'danielreffattiok@gmail.com',
  },
  {
    id: 32,
    name: 'Andres Gustavo Capriati',
    role: 'Vocal Titular 20°',
    image: auth32,
    description:
      'CADEFHA - CAMARA ARGENTINA DE FABRICANTES DE HERRAJES Y AFINES',
    email: 'andrgc73@gmail.com',
  },
  {
    id: 33,
    name: 'Alejandro Diego Mayer',
    role: 'Vocal Titular 21°',
    image: auth33,
    description:
      'APYMIE - ASOCIACIÓN DE PEQUEÑAS Y MEDIANAS INDUSTRIAS ELECTRÓNICAS',
    email: 'amayer@pcb.com.ar',
  },
  {
    id: 34,
    name: 'Norberto Peluso',
    role: 'Vocal Titular 22°',
    image: auth34,
    description: 'ADEL - Asociación de Empresas de Limpieza',
    email: 'harasesece@yahoo.com.ar',
  },
  {
    id: 35,
    name: 'Mario Daniel Koch',
    role: 'Vocal Titular 23°',
    image: auth35,
    description: 'CASEL - Cámara Argentina de Seguridad Electrónica',
    email: 'mariokoch@starx.com.ar',
  },
  {
    id: 36,
    name: 'Guillermo Mario Lopez',
    role: 'Vocal Titular 24°',
    image: auth36,
    description:
      'CECAF - Cámara Empresaria de Conservadores de Ascensores y Afines',
    email: 'plata1555@gmail.com',
  },
  {
    id: 37,
    name: 'Ezequiel Asquinasi',
    role: 'Vocal Titular 25°',
    image: auth37,
    description: 'CAEFA - Cámara Argentina de Empresas de Fuegos Artificiales',
    email: 'ezequiel@caefa.org.ar',
  },
  {
    id: 38,
    name: 'Daniel Jose Campora',
    role: 'Vocal Titular 26°',
    image: auth38,
    description: 'APYME - Asamblea de Pequeños y Medianos Empresarios',
    email: 'danielcampora.arq@gmail.com',
  },
  {
    id: 39,
    name: 'Julio Alberto Bozzeli',
    role: 'Vocal Titular 27°',
    image: auth39,
    description: 'CICA - Cámara de la Industria Curtidora Argentina',
    email: 'secretaria@cica.org.ar',
  },
  {
    id: 40,
    name: 'Fernando Maria Storni',
    role: 'Vocal Suplente 1°',
    image: auth40,
    description: 'CAEHV - Cámara Argentina de Engordadores de Hacienda Vacuna',
    email: 'fernando.storni@feedlot.com.ar',
  },
  {
    id: 41,
    name: 'Francisco Alberto Guglielmo',
    role: 'Vocal Suplente 2°',
    image: auth41,
    description:
      'CAIFA - Cámara de la Industria Argentina de Fertilizantes y Agroquímicos',
    email: 'guglielmo@foundryresins.com.ar',
  },
  {
    id: 42,
    name: 'Ramiro Zilvestein',
    role: 'Vocal Suplente 3°',
    image: auth42,
    description: 'CADIOA - Cámara Argentina de industrias ópticas y afines',
    email: 'gerencia@cadioa.com.ar',
  },
  {
    id: 43,
    name: 'Gabriela Laura Artinian',
    role: 'Vocal Suplente 4°',
    image: auth43,
    description: 'CAEFA - Cámara Argentina de Empresas de Fuegos Artificiales',
    email: 'gabriela@caefa.org.ar',
  },
  {
    id: 44,
    name: 'Alejandro Silvio Vazquez',
    role: 'Vocal Suplente 5°',
    image: 'https://via.placeholder.com/500x500.png?text=Alejandro+Vazquez',
    description:
      'CECAF - Cámara Empresaria de Conservadores de Ascensores y Afines',
    email: 'alsivaz@yahoo.com',
  },
  {
    id: 45,
    name: 'Carlos Adalberto Estebarena',
    role: 'Vocal Suplente 6°',
    image: auth45,
    description:
      'CAIPIC - Cámara Argentina de Industriales Proveedores de la Industria del Calzado',
    email: 'estebarena@gmail.com',
  },
  {
    id: 46,
    name: 'Pablo Daniel Lires',
    role: 'Vocal Suplente 7°',
    image: auth46,
    description:
      'APYMEP - Asociación de Pequeñas y Medianas Empresas y Profesionales',
    email: 'plablolires@yahoo.com.ar',
  },
  {
    id: 47,
    name: 'Pablo Andres Roust',
    role: 'Vocal Suplente 8°',
    image: auth47,
    description:
      'CADMI - CAMARA ARGENTINA DE DISTRIBUIDORES MAYORISTAS DE INFORMATICA',
    email: 'pablo_roust@solutionbox.com.ar',
  },
  {
    id: 48,
    name: 'Leonardo Anibal Marcilio',
    role: 'Vocal Suplente 9°',
    image: auth48,
    description: 'CCARPA - Cámara de Comercio Argentino Paraguaya',
    email: 'leomarcil@gmail.com',
  },
  {
    id: 49,
    name: 'Miguel Angel Hale',
    role: 'Vocal Suplente 10°',
    image: auth49,
    description:
      'CAEDE - CÁMARA ARGENTINA DE EMPRESAS DEMOLEDORAS Y EXCAVADORAS',
    email: 'miguel_hale@hotmail.com',
  },
  {
    id: 50,
    name: 'Patricia Nora Ballester',
    role: 'Vocal Suplente 11°',
    image: auth50,
    description:
      'AIERA - Asociación de Importadores y Exportadores de la República Argentina',
    email: 'pnballester@yahoo.com.ar',
  },
  {
    id: 51,
    name: 'Damian Andres Gravagna',
    role: 'Vocal Suplente 12°',
    image: auth51,
    description: 'CIC - Cámara de la Industria del Calzado',
    email: 'DGRAVAGNA@GMAIL.COM',
  },
  {
    id: 52,
    name: 'Guillermo Daniel Camioli',
    role: 'Vocal Suplente 13°',
    image: auth52,
    description:
      'UCI SAN LORENZO - UNIÓN DE COMERCIANTES E INDUSTRIALES DEL DPTO. SAN LORENZO',
    email: 'guillermocamioli@gelvezsrl.com.ar',
  },
  {
    id: 53,
    name: 'Norberto Luis Luciani',
    role: 'Revisor de Cuenta Titular 1°',
    image: auth53,
    description: 'FECIBA - FEDERACIÓN ECONÓMICA DE LA CIUDAD DE BUENOS AIRES',
    email: 'norbertolluciani@gmail.com',
  },
  {
    id: 54,
    name: 'Alejandro Agustin Carrano',
    role: 'Revisor de Cuenta Titular 2°',
    image: 'https://via.placeholder.com/500x500.png?text=Alejandro+Carrano',
    description:
      'CGERA ITUZAINGO - Confederación General Empresaria de la República Argentina',
    email: '',
  },
  {
    id: 55,
    name: 'Abel Andres Girard',
    role: 'Revisor de Cuenta Suplente',
    image: auth55,
    description: 'CAM TINTAS GRAF - Cámara de Tintas Gráficas',
    email: '',
  },
];

// ...existing code...

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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <Users
                className="mx-auto h-12 w-12 text-blue-600"
                color="#418CBD"
              />
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Autoridades y Asociados
              </h2>
              <p className="mt-4 max-w-2xl md:max-w-max text-xl text-gray-500 lg:mx-auto">
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
                      {authority.email && (
                        <p className="mt-2 text-sm text-gray-600">
                          <a
                            href={`mailto:${authority.email}`}
                            className="text-blue-500 hover:underline"
                          >
                            {authority.email}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Asociaciones*/}
      {/* <section className="py-16">
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
                      <div className="p-4 text-md sm:text-xl">
                        <h3 className=" font-semibold max-w-lg text-md text-gray-800">
                          {associates.name}:
                        </h3>

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
      </section> */}
    </div>
  );
};

export default AboutUsPage;
