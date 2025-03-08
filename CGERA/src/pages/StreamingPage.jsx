import { useRef, useState } from 'react';
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
      {/* Video de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-20"
        >
          <source
            src="https://media.istockphoto.com/id/2156675608/video/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.mp4?s=mp4-640x640-is&k=20&c=CHzdhPE9Y2wEdr0zqltlfhgLpGB9AU1mGnuo0AU91jk="
            type="video/mp4"
          />
          Tu navegador no soporta videos.
        </video>
      </div>

      {/* Contenido */}
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
            El Canal de las PYMEs
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
  const [videoUrl, setVideoUrl] = useState('');

  const handlePlayVideo = () => {
    setVideoUrl(
      'https://www.youtube-nocookie.com/embed/liAj2FwYUuo?si=aWrIDK8t9BO1SZdK'
    );
  };

  return (
    <section ref={ref} className="py-16 md:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">
            Video Destacado
          </h2>
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
            {videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <>
                <img
                  src="https://img.youtube.com/vi/_wNmXdPKL8Q/maxresdefault.jpg"
                  alt="Video Destacado"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-2 text-sm lg:text-xl sm:text-lg text-wrapping">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full mb-2 self-start">
                    Entrevista
                  </span>
                  <h3 className="max-w-lg font-bold text-white mb-2">
                    Video Introductorio al canal de Streaming de CGERA TV
                  </h3>
                  <p className="text-white/90 mb-1 xs:text-xs">
                    Descubre CGERA TV, con contenido exclusivo, entrevistas,
                    análisis y capacitaciones para el crecimiento de las PYMEs.
                  </p>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> 15 Mar 2023
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 45:32
                    </span>
                  </div>
                  {/* <div className="flex gap-3 xs:w-full justify-center">
                    <button
                      onClick={handlePlayVideo}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Play size={16} /> Reproducir Ahora
                    </button>
                    <button className="text-white border border-white hover:bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                      <Bookmark size={16} /> Guardar
                    </button>
                    <button className="text-white border border-white hover:bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                      <Share2 size={16} />
                    </button>
                  </div> */}
                </div>
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div
                    onClick={handlePlayVideo}
                    className="bg-white/90 rounded-full p-5 shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 cursor-pointer "
                  >
                    <Play className="max-h-max max-w-max  text-primary group-hover:text-white" />
                  </div>
                </div>
              </>
            )}
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
      icon: 'https://plus.unsplash.com/premium_photo-1672997189907-220e1305bb56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      count: 24,
    },
    {
      title: 'Capacitaciones',
      description: 'Tutoriales y cursos para mejorar la gestión de tu empresa',
      icon: 'https://plus.unsplash.com/premium_photo-1661763874747-405eb7388c58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      count: 36,
    },
    {
      title: 'Análisis',
      description: 'Informes y análisis sobre la economía y el mercado',
      icon: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      count: 18,
    },
    {
      title: 'Eventos',
      description: 'Cobertura de los principales eventos del sector PYME',
      icon: 'https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
          <h2 className="text-black text-3xl font-bold mb-4">
            Explora por Categorías
          </h2>
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
              <div className="h-full hover:shadow-lg transition-shadow text-center p-6 bg-white rounded-lg  border border-gray-100 rounded-ful">
                <div className="mx-auto relative mb-2l">
                  <img
                    src={category.icon || '/placeholder.svg'}
                    alt={category.title}
                    className="object-contain w-full h-full rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {category.title}
                </h3>
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

  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    'Todos',
    'Entrevista',
    'Capacitación',
    'Análisis',
    'Evento',
  ];

  const videos = [
    {
      title: 'Cómo implementar un CRM en tu PYME',
      category: 'Capacitación',
      duration: '28:45',
      date: '10 Mar 2023',
      views: '1.2K',
      image:
        'https://plus.unsplash.com/premium_photo-1661376745450-08db5346075b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Entrevista: La experiencia de exportar por primera vez',
      category: 'Entrevista',
      duration: '42:18',
      date: '05 Mar 2023',
      views: '856',
      image:
        'https://images.unsplash.com/photo-1497015455546-1da71faf8d06?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Análisis del mercado laboral para PYMEs en 2023',
      category: 'Análisis',
      duration: '35:22',
      date: '28 Feb 2023',
      views: '1.5K',
      image:
        'https://plus.unsplash.com/premium_photo-1661310049066-57565d639aba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Estrategias de marketing digital con bajo presupuesto',
      category: 'Capacitación',
      duration: '31:07',
      date: '20 Feb 2023',
      views: '2.3K',
      image:
        'https://plus.unsplash.com/premium_photo-1676651178953-4e4400aafa2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Mesa redonda: Desafíos del financiamiento PYME',
      category: 'Evento',
      duration: '58:33',
      date: '15 Feb 2023',
      views: '945',
      image:
        'https://plus.unsplash.com/premium_photo-1663089174939-5870e2e8d62e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Optimización fiscal para pequeñas empresas',
      category: 'Capacitación',
      duration: '26:14',
      date: '08 Feb 2023',
      views: '1.1K',
      image:
        'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const filteredVideos =
    selectedCategory === 'Todos'
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black text-3xl font-bold">
              Biblioteca de Videos
            </h2>
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
            <div className="relative flex-1 md:w-64 rounded-lg flex items-center text-gray-400">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                placeholder="Buscar videos"
                className="pl-10 border border-gray-400 text-black rounded-lg p-2 w-full placeholder-gray-400"
              />
            </div>
            <button className="text-gray-600 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2">
              <Filter size={16} /> Filtrar
            </button>
          </motion.div>
        </div>

        <div className="mb-8 flex overflow-x-auto bg-gray-100 p-1 rounded-lg max-w-max ">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`text-black border-none px-4 py-2 rounded-lg duration-150 max-w-max ${
                selectedCategory === category
                  ? 'bg-white border-none'
                  : 'text-gray-500'
              }`}
            >
              {category}
            </button>
          ))}
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
          {filteredVideos.map((video, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="group cursor-pointer rounded-lg overflow-hidden  p-4  ">
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
                  <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-2xl h-8 flex items-center gap-1">
                    {video.category}
                  </span>
                </div>
                <h3 className="font-medium text-gray-700 text-lg group-hover:text-primary transition-colors line-clamp-2">
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
