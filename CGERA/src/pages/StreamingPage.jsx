import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Play,
  Calendar,
  Clock,
  Search,
  Filter,
  ChevronRight,
  Bookmark,
  Share2,
  ThumbsUp,
} from 'lucide-react';

export default function CgeraTvPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Video */}
      <FeaturedVideoSection />

      {/* Video Categories */}
      <VideoCategoriesSection />

      {/* Video Archive */}
      <VideoArchiveSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/placeholder.svg?height=600&width=1600"
          alt="CGERA TV Background"
          className="object-cover w-full h-full opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            CGERA TV
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-medium mb-4"
          >
            El Canal para PYMEs
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl opacity-90 mb-8"
          >
            Contenido exclusivo, entrevistas, análisis y capacitaciones para el
            desarrollo de tu empresa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg font-medium">
              Ver Transmisión en Vivo
            </button>
            <button className="text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg text-lg font-medium">
              Explorar Videos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturedVideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Video Destacado</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mira nuestro contenido más reciente y relevante para el sector PYME.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video group cursor-pointer">
            <img
              src="/placeholder.svg?height=720&width=1280"
              alt="Video Destacado"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full mb-2 self-start">
                Entrevista
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                Perspectivas económicas 2023: Oportunidades para PYMEs
              </h3>
              <p className="text-white/90 mb-4 max-w-2xl">
                Entrevista exclusiva con reconocidos economistas sobre el
                panorama económico y las estrategias que pueden implementar las
                pequeñas y medianas empresas.
              </p>
              <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> 15 Mar 2023
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> 45:32
                </span>
              </div>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Play size={16} /> Reproducir Ahora
                </button>
                <button className="text-white border border-white hover:bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                  <Bookmark size={16} /> Guardar
                </button>
                <button className="text-white border border-white hover:bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-5 shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Play className="h-10 w-10 text-primary group-hover:text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VideoCategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = [
    {
      title: 'Entrevistas',
      description:
        'Conversaciones con líderes empresariales y expertos del sector',
      icon: '/placeholder.svg?height=80&width=80',
      count: 24,
    },
    {
      title: 'Capacitaciones',
      description: 'Tutoriales y cursos para mejorar la gestión de tu empresa',
      icon: '/placeholder.svg?height=80&width=80',
      count: 36,
    },
    {
      title: 'Análisis',
      description: 'Informes y análisis sobre la economía y el mercado',
      icon: '/placeholder.svg?height=80&width=80',
      count: 18,
    },
    {
      title: 'Eventos',
      description: 'Cobertura de los principales eventos del sector PYME',
      icon: '/placeholder.svg?height=80&width=80',
      count: 12,
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Explora por Categorías</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra el contenido que más te interesa organizado por temáticas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full hover:shadow-lg transition-shadow text-center p-6 bg-white rounded-lg">
                <div className="mx-auto w-16 h-16 relative mb-2">
                  <img
                    src={category.icon || '/placeholder.svg'}
                    alt={category.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm text-gray-500">
                  {category.count} videos disponibles
                </p>
                <button className="mt-4 text-blue-600 hover:underline flex items-center gap-1">
                  Ver Videos <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoArchiveSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const videos = [
    {
      title: 'Cómo implementar un CRM en tu PYME',
      category: 'Capacitación',
      duration: '28:45',
      date: '10 Mar 2023',
      views: '1.2K',
      image: '/placeholder.svg?height=200&width=350',
    },
    {
      title: 'Entrevista: La experiencia de exportar por primera vez',
      category: 'Entrevista',
      duration: '42:18',
      date: '05 Mar 2023',
      views: '856',
      image: '/placeholder.svg?height=200&width=350',
    },
    {
      title: 'Análisis del mercado laboral para PYMEs en 2023',
      category: 'Análisis',
      duration: '35:22',
      date: '28 Feb 2023',
      views: '1.5K',
      image: '/placeholder.svg?height=200&width=350',
    },
    {
      title: 'Estrategias de marketing digital con bajo presupuesto',
      category: 'Capacitación',
      duration: '31:07',
      date: '20 Feb 2023',
      views: '2.3K',
      image: '/placeholder.svg?height=200&width=350',
    },
    {
      title: 'Mesa redonda: Desafíos del financiamiento PYME',
      category: 'Evento',
      duration: '58:33',
      date: '15 Feb 2023',
      views: '945',
      image: '/placeholder.svg?height=200&width=350',
    },
    {
      title: 'Optimización fiscal para pequeñas empresas',
      category: 'Capacitación',
      duration: '26:14',
      date: '08 Feb 2023',
      views: '1.1K',
      image: '/placeholder.svg?height=200&width=350',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Biblioteca de Videos</h2>
            <p className="text-gray-600 mt-2">
              Explora nuestro archivo completo de contenidos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 md:mt-0 flex gap-4 w-full md:w-auto"
          >
            <div className="relative flex-1 md:w-64">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                placeholder="Buscar videos"
                className="pl-10 border rounded-lg p-2 w-full"
              />
            </div>
            <button className="text-gray-600 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
              <Filter size={16} /> Filtrar
            </button>
          </motion.div>
        </div>

        <div className="mb-8 flex gap-4 overflow-x-auto">
          <button className="text-blue-600 hover:underline">Todos</button>
          <button className="text-gray-600 hover:underline">Entrevistas</button>
          <button className="text-gray-600 hover:underline">
            Capacitaciones
          </button>
          <button className="text-gray-600 hover:underline">Análisis</button>
          <button className="text-gray-600 hover:underline">Eventos</button>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="group cursor-pointer">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <img
                    src={video.image || '/placeholder.svg'}
                    alt={video.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Play className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded">
                    {video.category}
                  </span>
                </div>
                <h3 className="font-medium text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {video.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp size={14} /> {video.views} vistas
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-600 hover:text-blue-600">
                      <Bookmark size={16} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2">
            Cargar Más Videos <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
