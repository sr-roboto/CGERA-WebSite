import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
import capacitarLogo from '../assets/capacitar-logo.png';

export default function CgeraTvPage() {
  // Crear una referencia que se pasará a VideoArchiveSection
  const videoArchiveRef = useRef(null);

  // Estado para compartir la categoría seleccionada
  const [globalSelectedCategory, setGlobalSelectedCategory] = useState('Todos');

  // Función para hacer scroll a la sección y cambiar la categoría
  const navigateToVideoArchive = (category) => {
    // Mapea las categorías en plural a singular para coincidir con los filtros
    const categoryMap = {
      Entrevistas: 'Entrevista',
      Capacitaciones: 'Capacitación',
      Análisis: 'Análisis',
      Eventos: 'Evento',
    };

    // Establece la categoría seleccionada
    setGlobalSelectedCategory(categoryMap[category] || category);

    // Hace scroll a la sección de archivos
    videoArchiveRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Función para hacer scroll a la sección
  const scrollToVideoArchive = () => {
    videoArchiveRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection
        scrollToVideoArchive={() => navigateToVideoArchive('Todos')}
      />

      {/* Featured Video */}
      <FeaturedVideoSection />

      {/* Highlights */}
      <HighlightsSection />

      {/* Video Categories */}
      <VideoCategoriesSection navigateToVideoArchive={navigateToVideoArchive} />

      {/* Video Archive */}
      <VideoArchiveSection
        ref={videoArchiveRef}
        selectedCategory={globalSelectedCategory}
        setSelectedCategory={setGlobalSelectedCategory}
      />
    </div>
  );
}

const HeroSection = ({ scrollToVideoArchive }) => {
  // Agregamos estados para controlar la reproducción de videos
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // Función para reproducir la transmisión en vivo
  const handlePlayLive = () => {
    setVideoUrl(
      'https://www.youtube-nocookie.com/embed/VVbHG__h-So?autoplay=1'
    );
    setShowVideo(true);
  };

  // Función para reproducir el último programa
  const handlePlayLastProgram = () => {
    setVideoUrl(
      'https://www.youtube-nocookie.com/embed/liAj2FwYUuo?autoplay=1'
    );
    setShowVideo(true);
  };

  // Función para cerrar el video
  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoUrl('');
  };

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
            src="https://res.cloudinary.com/dmdverrub/video/upload/v1743763132/pflhcykw9grpkve25oaq.mp4"
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
            <button
              onClick={handlePlayLive}
              className="cursor-pointer bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg font-medium"
            >
              Ver Transmisión en Vivo
            </button>
            <button
              onClick={handlePlayLastProgram}
              className="cursor-pointer text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg text-lg font-medium"
            >
              Último Programa
            </button>
            <button
              onClick={scrollToVideoArchive}
              className="cursor-pointer text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg text-lg font-medium"
            >
              Explorar Videos
            </button>
          </motion.div>
        </div>
      </div>

      {/* Reproductor de video embebido */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-5xl mx-4 aspect-video">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-lg font-medium"
              onClick={handleCloseVideo}
            >
              Cerrar ×
            </button>
            <iframe
              src={videoUrl}
              title="Video de CGERA TV"
              className="w-full h-full rounded-lg shadow-xl"
              allowFullScreen
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}
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
    <section ref={ref} className="py-8 md:py-16 ">
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

const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para extraer el ID del video de YouTube de la URL de embed
  const getYouTubeID = (url) => {
    const regExp = /embed\/([^?]+)/;
    const match = url.match(regExp);
    return match && match[1];
  };

  // Datos de momentos destacados
  const highlights = [
    {
      id: 1,
      title: 'Qué hacemos con la Industria?',
      duration: '2:45',
      timestamp: '05:23',
      videoUrl:
        'https://www.youtube-nocookie.com/embed/WyhqZLOYVHM?si=73MmEz0G1lOq2ncS',
      description: 'Marcelo Fernandez',
    },
    {
      id: 2,
      title: 'Alcanza la adaptabilidad de las PYMES para sortear la Crisis?',
      duration: '3:12',
      timestamp: '18:47',
      videoUrl:
        'https://www.youtube-nocookie.com/embed/u25EtzE_xaI?si=aQUtqJaqZ_tNZJh4',
      description: 'Rubén Pallone',
    },
    {
      id: 3,
      title: 'El modelo impulsa el contrabando, que hacer?',
      duration: '4:30',
      timestamp: '32:15',
      videoUrl:
        'https://www.youtube-nocookie.com/embed/OCgesmzqp40?si=kpbMpaP_N1IWpwQ_',
      description: 'Horacio Moschetto',
    },
    {
      id: 4,
      title: 'Exportar Materias Primas sin procesar, industricidio?',
      duration: '2:52',
      timestamp: '45:10',
      videoUrl:
        'https://www.youtube-nocookie.com/embed/WsqMc1OXuFU?si=gTkd7Tvlaagmmitx',
      description: 'Rubén Pallone',
    },
    {
      id: 5,
      title:
        'El canal de Streaming de  CGERA, un abrazo asociativo, en medio de la incertidumbre!!!',
      duration: '3:20',
      timestamp: '55:05',
      videoUrl:
        'https://www.youtube-nocookie.com/embed/3YOXDANh7As?si=trQDB-D0ZyfCrUac',
      description: 'Marcelo Fernandez',
    },
  ];

  const openVideoModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section ref={ref} className="py-4 md:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">
            Momentos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los fragmentos más importantes y reveladores de nuestros videos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${getYouTubeID(
                    highlight.videoUrl
                  )}/hqdefault.jpg`}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group"
                  onClick={() => openVideoModal(highlight.videoUrl)}
                >
                  <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <Play className="h-5 w-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {highlight.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {highlight.timestamp}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 hover:text-blue-600 transition-colors mb-1">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
            Ver todos los momentos destacados <ChevronRight size={16} />
          </button>
        </motion.div>

        {/* Modal para reproducir video */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
            <div className="relative w-full max-w-4xl mx-4 aspect-video">
              <button
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
              <iframe
                src={currentVideoUrl}
                title="Momento destacado"
                className="w-full h-full"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const VideoCategoriesSection = ({ navigateToVideoArchive }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Estado para controlar el hover en cada tarjeta
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Categorías actualizadas con las nuevas opciones
  const categories = [
    {
      title: 'Entrevistas',
      description:
        'Conversaciones con líderes empresariales y expertos del sector',
      icon: 'https://plus.unsplash.com/premium_photo-1672997189907-220e1305bb56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      count: 2,
      url: '#videoArchive',
      subtitulo: [], // Mantenemos el array vacío para esta categoría
    },
    {
      title: 'Capacitaciones',
      description: 'Tutoriales y cursos para mejorar la gestión de tu empresa',
      icon: 'https://plus.unsplash.com/premium_photo-1661763874747-405eb7388c58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      count: 3,
      url: '#videoArchive',
      subtitulo: [
        {
          title: 'Marketing Digital para Aventureros',
          description: 'Aprende a utilizar la IA para tu estrategia digital',
          url: '/course',
          imagen: 'https://img.youtube.com/vi/IzpwyqjSw80/hqdefault.jpg',
        },
        {
          title: 'Coaching Empresarial',
          description: 'Desarrollo del Potencial Individual y de Equipos',
          url: '#',
          videoUrl:
            'https://www.youtube.com/embed/sEQ29P9-un8?si=CG_DOMwi3tkss35-',
          imagen: 'https://img.youtube.com/vi/sEQ29P9-un8/hqdefault.jpg',
        },
        {
          title: 'Liderazgo, Gestión y Empresas Familiares',
          description: 'Marcelo Leibovich Lilien',
          url: '#',
          videoUrl:
            'https://www.youtube-nocookie.com/embed/sGxAHvQiDCU?si=5HNGOaHqQXIN2z-E',
          imagen: 'https://img.youtube.com/vi/sGxAHvQiDCU/hqdefault.jpg',
        },
      ],
    },
    {
      title: 'Análisis',
      description: 'Informes y análisis sobre la economía y el mercado',
      icon: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      count: 1,
      url: '#videoArchive',
      subtitulo: [],
    },
    {
      title: 'Eventos',
      description: 'Cobertura de los principales eventos del sector PYME',
      icon: 'https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      count: 1,
      url: '#videoArchive',
      subtitulo: [],
    },
  ];

  // Estado para controlar el modal de video
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal de video
  const openVideoModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <section ref={ref} className="py-16 md:py-8 bg-gray-50">
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
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="h-full hover:shadow-lg transition-shadow text-center p-6 bg-white rounded-lg border border-gray-100">
                {/* Imagen clickeable que lleva al archivo de videos */}
                <div
                  className="mx-auto relative mb-4 cursor-pointer"
                  onClick={() => navigateToVideoArchive(category.title)}
                >
                  <img
                    src={category.icon || '/placeholder.svg'}
                    alt={category.title}
                    className="object-cover w-full h-48 rounded-2xl shadow-lg hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white/90 rounded-full p-3 shadow-lg">
                      <ChevronRight className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {category.title}
                </h3>

                <p className="text-gray-600 mb-4">{category.description}</p>

                {/* Lista de subtítulos con miniaturas cuando existen Y el usuario hace hover*/}
                {hoveredCategory === index &&
                  category.subtitulo &&
                  category.subtitulo.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 mb-4"
                    >
                      {category.subtitulo.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-lg p-3 text-left hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {/* Miniatura del contenido */}
                            <div
                              className="w-20 h-12 relative rounded overflow-hidden flex-shrink-0"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (item.videoUrl) {
                                  openVideoModal(item.videoUrl);
                                } else if (item.url) {
                                  window.location.href = item.url;
                                }
                              }}
                            >
                              <img
                                src={
                                  item.imagen ||
                                  'https://via.placeholder.com/150'
                                }
                                alt={item.title}
                                className="w-full h-full object-cover cursor-pointer"
                              />
                              {item.videoUrl && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                  <Play size={14} className="text-white" />
                                </div>
                              )}
                            </div>

                            <div>
                              <Link
                                to={item.url}
                                className="text-sm font-medium text-blue-600 hover:underline block"
                                onClick={(e) => {
                                  if (item.videoUrl) {
                                    e.preventDefault();
                                    openVideoModal(item.videoUrl);
                                  }
                                }}
                              >
                                {item.title}
                              </Link>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                <button
                  onClick={() => navigateToVideoArchive(category.title)}
                  className="mt-4 text-blue-600 hover:underline flex items-center gap-1 mx-auto justify-center"
                >
                  Ver Videos <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal para reproducir video */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
            <div className="relative w-full max-w-4xl mx-4 aspect-video">
              <button
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
              <iframe
                src={currentVideoUrl}
                title="Video"
                className="w-full h-full"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const VideoArchiveSection = React.forwardRef(
  ({ selectedCategory, setSelectedCategory }, ref) => {
    const sectionRef = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categories = [
      'Todos',
      'Entrevista',
      'Capacitación',
      'Análisis',
      'Evento',
    ];

    // Función para extraer el ID del video de YouTube de la URL de embed
    const getYouTubeID = (url) => {
      if (!url) return null;

      const regExp = /embed\/([^?]+)/;
      const match = url.match(regExp);
      return match && match[1];
    };

    // Función para abrir el modal de video
    const openVideoModal = (videoUrl) => {
      setCurrentVideoUrl(videoUrl);
      setIsModalOpen(true);
    };

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
      {
        title: 'Cgera TV',
        category: 'Entrevista',
        duration: '24:38',
        date: '16 Mar 2025',
        views: '1.1K',
        videoUrl:
          'https://www.youtube-nocookie.com/embed/VVbHG__h-So?si=Q-_jro9UUvGNdG69',
      },
    ];

    const filteredVideos =
      selectedCategory === 'Todos'
        ? videos
        : videos.filter((video) => video.category === selectedCategory);

    return (
      <section
        ref={(node) => {
          // Esta función asigna la ref tanto a la ref local como a la ref enviada desde el padre
          sectionRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className="py-16 md:py-24"
      >
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
                <div className="group cursor-pointer rounded-lg overflow-hidden p-4">
                  <div
                    className="relative aspect-video rounded-lg overflow-hidden mb-3"
                    onClick={() => openVideoModal(video.videoUrl)}
                  >
                    <img
                      src={
                        video.videoUrl
                          ? `https://img.youtube.com/vi/${getYouTubeID(
                              video.videoUrl
                            )}/hqdefault.jpg`
                          : video.image || '/placeholder.svg'
                      }
                      alt={video.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                        <Play className="h-6 w-6 text-blue-600 group-hover:text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-2xl h-8 flex items-center gap-1">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-700 text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
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

          <div className="text-center mt-12 mb-8">
            <button className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 mx-auto justify-center">
              Cargar Más Videos <ChevronRight size={16} />
            </button>
          </div>

          <div className="container bg-red-500 rounded-3xl py-8 ">
            <Link to="/course">
              <div className="row">
                <div className=" flex flex-col justify-center">
                  <img
                    src={capacitarLogo}
                    alt="logo capacitar"
                    className="min-h-2 px-4 mx-auto md:w-1/2 lg:w-1/3"
                  />
                  <p className="text-center pt-5">
                    Accedé a capacitaciones gratuitas para potenciar tus
                    proyectos, carrera profesional o emprendimientos.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Modal para reproducir video */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
              <div className="relative w-full max-w-4xl mx-4 aspect-video">
                <button
                  className="absolute -top-10 right-0 text-white hover:text-gray-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cerrar
                </button>
                <iframe
                  src={currentVideoUrl}
                  title="Video de la biblioteca"
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
);
