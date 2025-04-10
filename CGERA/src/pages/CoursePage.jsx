import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState('module-1'); // Estado para la pestaña activa
  console.log(activeTab); // Verifica el estado activo en la consola

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
      editingProcess: [
        'Creación del guion inicial, adaptado para video pregrabado.',
        'Generación del video introductorio con el avatar de Zoe.',
        'Diseño de diapositivas de presentación con transiciones dinámicas.',
        'Incorporación de música de fondo motivadora.',
        'Creación de llamado a la acción para interactuar con el chatbot de Zoe, con actividad de esbozar el propio cliente ideal.',
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
      editingProcess: [
        'Elaboración del guion, ampliando la información teórica.',
        'Generación del video con el avatar de Zoe.',
        'Diseño de diapositivas explicativas y ejemplos visuales.',
        'Creación de llamado a la acción para interactuar con el chatbot, actividad de investigación del cliente ideal usando una herramienta.',
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
      editingProcess: [
        'Creación del guion, con enfoque en la claridad y el lenguaje visual.',
        'Generación del video con el avatar de Zoe.',
        'Incorporación de ejemplos visuales de prompts y banners generados.',
        'Creación de llamado a la acción para interactuar con el chatbot, con actividad de crear un banner propio.',
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
      editingProcess: [
        'Elaboración del guion, con énfasis en la teoría y los beneficios de HubSpot.',
        'Generación del video con el avatar de Zoe.',
        'Diseño de diapositivas explicativas con diagramas y capturas de pantalla conceptuales.',
        'Creación de llamado a la acción para interactuar con el chatbot, con actividad de pensar en una oferta para una landing page.',
      ],
    },
    {
      id: 'module-5',
      title: 'Introducción a la Difusión',
      description:
        'El puente entre el mensaje y la audiencia, estrategias de difusión y optimización mediante IA.',
      videoUrl: 'https://youtu.be/uEqeIXbFGyo',
      topics: ['Mensaje', 'Difusión', 'Audiencia', 'Estrategia', 'IA'],
      editingProcess: [
        'Creación del guion, con un enfoque en conceptos clave y metáforas visuales.',
        'Generación del video con el avatar de Zoe.',
        'Diseño de diapositivas con diagramas y mapas conceptuales.',
        'Creación de llamado a la acción para interactuar con el chatbot, con actividad de reflexión sobre el canal ideal.',
      ],
    },
    {
      id: 'module-6',
      title: 'Profundizando en Canales de Difusión',
      description:
        'Estrategias específicas para Instagram, YouTube, Google Ads y Email Marketing.',
      videoUrl: 'https://youtu.be/lTYKXQF3tfk',
      topics: ['Instagram', 'YouTube', 'Google Ads', 'Email Marketing'],
      editingProcess: [
        'Elaboración del guion, con un equilibrio entre teoría y ejemplos prácticos.',
        'Generación del video con el avatar de Zoe.',
        'Diseño de diapositivas con logos de las plataformas y ejemplos visuales.',
        'Creación de llamado a la acción para interactuar con el chatbot, con actividad de investigación sobre un canal específico.',
      ],
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
      editingProcess: [
        'Creación del guion, con énfasis en la importancia de la medición y la optimización.',
        'Generación del video con el avatar de Zoe.',
        'Diseño de diapositivas con diagramas del embudo, tablas comparativas de métricas y logos de herramientas.',
        'Creación de llamado a la acción detallado para interactuar con el chatbot, con actividad de dibujar el propio embudo de marketing.',
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
      editingProcess: [
        'Elaboración del guion, con un tono motivador y orientado al futuro.',
        'Generación del video con el avatar de Zoe.',
        'Diseño de diapositivas con imágenes futuristas y resúmenes visuales.',
        'Incorporación de música inspiradora.',
        'Creación de llamado a la acción final para interactuar con el chatbot.',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Desata el Poder de la IA: Marketing Digital para Aventureros
                <span className="block text-2xl md:text-3xl mt-2 text-purple-200">
                  (y No Aventureros También)
                </span>
              </h1>
              <p className="text-lg mb-8">
                Un curso completo que te brindará todas las herramientas
                necesarias para dominar el marketing digital con inteligencia
                artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sobre el Curso
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Este workshop te introduce en el mundo del marketing digital con
              Inteligencia Artificial a través de 8 módulos completos,
              presentados por Zoe, tu guía virtual.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100">
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
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100">
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
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100">
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
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Estructura del Curso
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              El curso se divide en 8 partes, cada una con un enfoque temático
              específico, actividades prácticas y una llamada a la acción.
            </p>
          </div>

          {/* Custom Tabs Implementation */}
          <div className="w-full">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {courseModules.map((module, index) => (
                <button
                  key={module.id}
                  onClick={() => setActiveTab(module.id)}
                  className={`tab-button px-4 py-2 text-sm rounded-md transition-colors ${
                    activeTab === module.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Parte {index + 1}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {courseModules.map((module, index) => {
              // Solo renderizar el contenido activo para mejorar el rendimiento
              if (activeTab !== module.id) return null;

              return (
                <div
                  key={module.id}
                  className="tab-content-active animate-fadeIn"
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
                              <li key={i} className="flex items-start">
                                <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                          <h4 className="font-medium text-lg mb-3 mt-6">
                            Proceso de Edición:
                          </h4>
                          <ul className="space-y-2">
                            {module.editingProcess.map((step, i) => (
                              <li key={i} className="flex items-start">
                                <ChevronRight className="h-5 w-5 text-purple-600 mr-2 shrink-0 mt-0.5" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${getYouTubeID(
                              module.videoUrl
                            )}`}
                            title={`Módulo ${index + 1}: ${module.title}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-4">
                      <a
                        href={module.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Ver video completo{' '}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir este curso?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Este curso te ofrece una base teórica y conceptual amplia, con
              herramientas prácticas para dominar el marketing digital con IA.
            </p>
          </div>

          <div className="text-gray-900 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white  rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Conocimiento Completo
                </h3>
              </div>
              <div className="px-6 pb-6">
                <p>
                  Desde la definición del cliente ideal hasta la optimización de
                  estrategias, cubrimos todo el ciclo del marketing digital.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Asistencia con IA
                </h3>
              </div>
              <div className="px-6 pb-6">
                <p>
                  Zoe, tu asistente de IA, estará disponible para resolver dudas
                  y brindarte apoyo durante todo el curso.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enfoque Práctico</h3>
              </div>
              <div className="px-6 pb-6">
                <p>
                  Cada módulo incluye actividades prácticas para aplicar
                  inmediatamente lo aprendido en tu propio proyecto.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Tendencias Actuales
                </h3>
              </div>
              <div className="px-6 pb-6">
                <p>
                  Aprenderás sobre las últimas tendencias en marketing digital
                  con IA, preparándote para el futuro de la industria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para desatar el poder de la IA en tu marketing?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Inscríbete ahora y comienza tu viaje hacia el dominio del marketing
            digital con inteligencia artificial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 text-lg font-medium bg-white text-purple-700 hover:bg-purple-100 rounded-md transition-colors">
              Inscríbete Ahora
            </button>
            <button className="px-6 py-3 text-lg font-medium border border-white text-white hover:bg-white/10 rounded-md transition-colors">
              Más Información
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
