import React from 'react';
import FadeIn from './animations/FadeIn';

const newsItems = [
  {
    id: 1,
    title: 'RONDA DE NEGOCIOS MULTISECTORIAL ENTRE COOPERATIVAS Y PYMES',
    excerpt:
      'La Confederación General Empresaria de la República Argentina (CGERA) junto a la INAES convocaron a la Ronda de Negocios Multisectorial entre Cooperativas y PYMES... ',
    date: 'March 15, 2024',
    image:
      'https://www.cge-ra.org/V16/wp-content/uploads/2023/11/1-768x512.jpg',
  },
  {
    id: 2,
    title:
      'CGERA y CGCYS avanzan en un convenio de formación con el Municipio y la Universidad de La Matanza',
    excerpt:
      'La Confederación General Empresaria de la República Argentina (CGERA), acordaron este viernes los principales puntos de un convenio de formación y colaboración...',
    date: 'March 10, 2024',
    image:
      'http://www.cge-ra.org/V16/wp-content/uploads/2023/09/20191005universidadlamatanzagzaunlamgjpg-787698.jpg',
  },
  {
    id: 3,
    title:
      'Con la presencia de CGERA, el Consejo Económico y Social analizó el ingreso de Argentina a los BRICS',
    excerpt:
      'El Tesorero de la Confederación General Empresaria de la República Argentina, Facundo Girard, participó este jueves del encuentro del Consejo Económico y Social...',
    date: 'March 5, 2024',
    image: 'http://www.cge-ra.org/V16/wp-content/uploads/2023/09/CES-1.jpg',
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Últimas Novedades
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Manténgase actualizado con las últimas noticias, eventos y anuncios
            de CGERA
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 w-full relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                >
                  Ver mas
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/news"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Ver todas las noticias
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
