import { ChevronRight, Play } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState('module-1'); // Estado para la pestaña activa
  const location = useLocation();

  // Referencias para animaciones basadas en scroll
  const courseOverviewRef = useRef(null);
  const courseModulesRef = useRef(null);
  const benefitsRef = useRef(null);

  // Estado de visibilidad para las secciones
  const isCourseOverviewVisible = useInView(courseOverviewRef, {
    once: true,
    amount: 0.2,
  });
  const isCourseModulesVisible = useInView(courseModulesRef, {
    once: true,
    amount: 0.2,
  });
  const isBenefitsVisible = useInView(benefitsRef, { once: true, amount: 0.2 });

  // Controles de animación
  const overviewControls = useAnimation();
  const modulesControls = useAnimation();
  const benefitsControls = useAnimation();

  // Efecto para disparar animaciones cuando las secciones son visibles
  useEffect(() => {
    if (isCourseOverviewVisible) {
      overviewControls.start('visible');
    }
    if (isCourseModulesVisible) {
      modulesControls.start('visible');
    }
    if (isBenefitsVisible) {
      benefitsControls.start('visible');
    }
  }, [isCourseOverviewVisible, isCourseModulesVisible, isBenefitsVisible]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Función para extraer correctamente el ID de YouTube de diferentes formatos de URL
  const getYouTubeID = (url) => {
    // Maneja URLs de formato youtu.be y youtube.com
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      return new URLSearchParams(url.split('?')[1]).get('v');
    } else {
      return url.split('/').pop(); // Fallback al método anterior
    }
  };

  // Variantes de animación
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const courseModules = [
    {
      id: 'module-1',
      title: 'Introducción Energética y Cliente Ideal',
      description:
        'Bienvenida al curso, presentación de Zoe como guía, introducción al marketing digital con IA y definición del cliente ideal.',
      videoUrl: 'https://youtu.be/IzpwyqjSw80',
      topics: [
        'Bienvenida entusiasta',
        'Presentación de Zoe como guía del curso',
        'Introducción al marketing digital con IA',
        'Definición del cliente ideal',
      ],
    },
    {
      id: 'module-2',
      title: 'Profundización en el Cliente Ideal',
      description:
        "Componentes del 'Buyer Persona', herramientas de investigación y técnicas para personalizar la comunicación.",
      videoUrl: 'https://youtu.be/h-NBG51jrE0',
      topics: [
        "Componentes del 'Buyer Persona'",
        'Herramientas de investigación',
        'Uso de IA para refinar perfiles',
        'Adaptación del mensaje',
      ],
    },
    {
      id: 'module-3',
      title: 'Creación de Activos: Banners',
      description:
        "Introducción a la IA generativa, optimización de 'prompts' y herramientas para crear banners publicitarios.",
      videoUrl: 'https://youtu.be/6Sv9DXwbfdA',
      topics: [
        'Introducción a la IA generativa',
        "Optimización de 'prompts'",
        'Herramientas disponibles',
        'Edición y personalización',
      ],
    },
    {
      id: 'module-4',
      title: 'Introducción a Landing Pages y HubSpot',
      description:
        'Elementos clave de una landing page efectiva y uso de HubSpot para la captación de leads.',
      videoUrl: 'https://youtu.be/fl-S0TKZU2k',
      topics: [
        'Conversión',
        'Elementos clave',
        'HubSpot',
        'Importancia estratégica',
      ],
    },
    {
      id: 'module-5',
      title: 'Introducción a la Difusión',
      description:
        'El puente entre el mensaje y la audiencia, estrategias de difusión y optimización mediante IA.',
      videoUrl: 'https://youtu.be/uEqeIXbFGyo',
      topics: ['Mensaje', 'Difusión', 'Audiencia', 'Estrategia', 'IA'],
    },
    {
      id: 'module-6',
      title: 'Profundizando en Canales de Difusión',
      description:
        'Estrategias específicas para Instagram, YouTube, Google Ads y Email Marketing.',
      videoUrl: 'https://youtu.be/lTYKXQF3tfk',
      topics: ['Instagram', 'YouTube', 'Google Ads', 'Email Marketing'],
    },
    {
      id: 'module-7',
      title: 'Integración de Estrategias y Medición del Éxito',
      description:
        'Embudo de marketing, métricas clave y herramientas de medición y análisis.',
      videoUrl: 'https://youtu.be/U8NxIkuVbAg',
      topics: [
        'Embudo de marketing',
        'Métricas clave',
        'Herramientas de medición',
        'Rol de la IA en análisis de datos',
      ],
    },
    {
      id: 'module-8',
      title: 'Optimización, Tendencias y Cierre',
      description:
        'Ciclo de mejora continua, tendencias futuras del marketing con IA y consejos prácticos.',
      videoUrl: 'https://youtu.be/U8NxIkuVbAg',
      topics: [
        'Análisis',
        'Planificación',
        'Implementación',
        'Medición',
        'Tendencias futuras',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols gap-12 items-center mt-10 ">
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Desata el Poder de la IA: Marketing Digital para Aventureros
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg"
              >
                Un curso completo que te brindará todas las herramientas
                necesarias para dominar el marketing digital con inteligencia
                artificial.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section ref={courseOverviewRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={overviewControls}
          variants={sectionVariants}
        >
          <motion.div className="text-center mb-12" variants={cardVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sobre el Curso
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Este workshop te introduce en el mundo del marketing digital con
              Inteligencia Artificial a través de 8 módulos completos,
              presentados por Zoe, tu guía virtual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Técnica Innovadora
                </h3>
              </div>
              <div className="px-6 pb-6">
                <p>
                  Combinamos videos explicativos con un avatar virtual, capturas
                  de pantalla animadas y plantillas visualmente atractivas para
                  una experiencia de aprendizaje única.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Asistencia con IA
                </h3>
              </div>
              <div className="px-6 pb-6">
                <p>
                  Tendrás acceso a Zoe, una asistente de IA que te brindará
                  apoyo constante durante todo tu recorrido de aprendizaje.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100"
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Enfoque Práctico</h3>
              </div>
              <div className="px-6 pb-6">
                <p>
                  Cada módulo incluye actividades prácticas y llamadas a la
                  acción para aplicar inmediatamente lo aprendido en tu propio
                  proyecto.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Course Modules */}
      <section
        ref={courseModulesRef}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={modulesControls}
          variants={sectionVariants}
        >
          <motion.div className="text-center mb-12" variants={cardVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estructura del Curso
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              El curso se divide en 8 partes, cada una con un enfoque temático
              específico, actividades prácticas y una llamada a la acción.
            </p>
          </motion.div>

          {/* Custom Tabs Implementation */}
          <div className="w-full">
            {/* Tab Navigation */}
            <motion.div
              className="flex flex-wrap justify-center mb-8 gap-2"
              variants={cardVariants}
            >
              {courseModules.map((module, index) => (
                <motion.button
                  key={module.id}
                  onClick={() => setActiveTab(module.id)}
                  className={`tab-button px-4 py-2 text-sm rounded-md transition-colors ${
                    activeTab === module.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  variants={tabVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Parte {index + 1}
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            {courseModules.map((module, index) => {
              // Solo renderizar el contenido activo para mejorar el rendimiento
              if (activeTab !== module.id) return null;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="tab-content-active"
                >
                  <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                      <h3 className="text-xl md:text-2xl font-semibold">
                        Parte {index + 1}: {module.title}
                      </h3>
                      <p className="text-gray-500 mt-1">{module.description}</p>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-lg mb-3">
                            Contenido:
                          </h4>
                          <ul className="space-y-2">
                            {module.topics.map((topic, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                              >
                                <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <motion.div
                          className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${getYouTubeID(
                              module.videoUrl
                            )}`}
                            title={`Módulo ${index + 1}: ${module.title}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </motion.div>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-4">
                      <motion.a
                        href={module.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver video completo{' '}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={benefitsControls}
          variants={sectionVariants}
        >
          <motion.div className="text-center mb-12" variants={cardVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir este curso?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Este curso te ofrece una base teórica y conceptual amplia, con
              herramientas prácticas para dominar el marketing digital con IA.
            </p>
          </motion.div>

          <div className="text-gray-900 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((num, idx) => {
              const titles = [
                'Conocimiento Completo',
                'Asistencia con IA',
                'Enfoque Práctico',
                'Tendencias Actuales',
              ];
              const descriptions = [
                'Desde la definición del cliente ideal hasta la optimización de estrategias, cubrimos todo el ciclo del marketing digital.',
                'Zoe, tu asistente de IA, estará disponible para resolver dudas y brindarte apoyo durante todo el curso.',
                'Cada módulo incluye actividades prácticas para aplicar inmediatamente lo aprendido en tu propio proyecto.',
                'Aprenderás sobre las últimas tendencias en marketing digital con IA, preparándote para el futuro de la industria.',
              ];

              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="p-6">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, backgroundColor: '#d8b4fe' }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <span className="text-2xl font-bold text-purple-600">
                        {num}
                      </span>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">
                      {titles[idx]}
                    </h3>
                  </div>
                  <div className="px-6 pb-6">
                    <p>{descriptions[idx]}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
