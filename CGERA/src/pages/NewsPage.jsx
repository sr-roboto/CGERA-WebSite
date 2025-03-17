import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Modal from 'react-modal';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import {
  Tag,
  Calendar,
  MessageCircle,
  Share2,
  SquarePlus,
  Edit,
  Trash,
} from 'lucide-react';
import { motion } from 'framer-motion';
import useAuth from '../context/UseAuth';
import CapacitarLogo from '../assets/capacitar-logo.png';
import BrechaCero from '../assets/brecha-cero-banner.png';
import CapacitarImage from '../assets/capacitar-image.png';

const categories = [
  'All',
  'Industry News',
  'Events',
  'Press Releases',
  'Innovation',
  'Member Stories',
];
const tags = [
  'Technology',
  'Leadership',
  'Sustainability',
  'Digital Transformation',
  'Networking',
];

const initialArticles = [
  {
    id: 1,
    title:
      'Conferencia anual de la CGERA 2024: Dando forma al futuro del comercio',
    category: 'Events',
    tags: ['Leadership', 'Networking'],
    excerpt:
      'loremp ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in nunc.',
    content: 'Full article content here...',
    author: 'Maria Rodriguez',
    date: '2024-03-15',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Innovación en prácticas empresariales sostenibles',
    category: 'Industry News',
    tags: ['Sustainability', 'Innovation'],
    excerpt:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in nunc.',
    content: 'Full article content here...',
    author: 'Carlos Martinez',
    date: '2024-03-10',
    image:
      'https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Casos de éxito de transformación digital',
    category: 'Member Stories',
    tags: ['Technology', 'Digital Transformation'],
    excerpt:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in nunc.',
    content: 'Full article content here...',
    author: 'Sarah Chen',
    date: '2024-03-05',
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    title: 'Desafíos de la educación en 2025',
    category: 'Press Releases',
    tags: ['Networking'],
    excerpt:
      'La preguntas en torno cómo será la educación del futuro se han revitalizado con el auge de la Inteligencia Artificial.. ',
    content: 'Full article content here...',
    Author: 'John Smith',
    date: '2025-03-17',
    image:
      'https://nomadesdigitales.com.ar/wp-content/uploads/2025/02/10-Entrevistados.png',
  },
  {
    id: 5,
    title: 'Brecha Cero ',
    category: 'Press Releases',
    tags: ['Networking'],
    excerpt:
      'Banco Formosa, presenta Sala de Escape Digital, desarrollada por Formosa Software Factory, para alcanzar la Brecha Cero en su política de Género ',
    content: 'Full article content here...',
    Author: 'John Smith',
    date: '2025-03-17',
    image: BrechaCero,
  },
  {
    id: 6,
    title: 'Capacitar plataforma educativa',
    category: 'Press Releases',
    tags: ['Networking'],
    excerpt:
      'El gobierno nacional ha lanzado junto a diversas entidades la plataforma de Formación para Empresarios y Emprendedores en habilidades específicas, como tambien en digitales y blandas. ',
    content: 'Full article content here...',
    Author: 'John Smith',
    date: '2025-03-17',
    image: CapacitarImage,
  },
];

const NewsPage = () => {
  const { isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [articles, setArticles] = useState(initialArticles);
  const [newArticle, setNewArticle] = useState({
    title: '',
    category: 'Industry News',
    tags: [],
    excerpt: '',
    content: '',
    author: '',
    date: '',
    image: '',
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticleId, setCurrentArticleId] = useState(null);

  const filteredArticles = articles.filter((article) => {
    const categoryMatch =
      selectedCategory === 'All' || article.category === selectedCategory;
    const tagsMatch =
      selectedTags.length === 0 ||
      article.tags.some((tag) => selectedTags.includes(tag));
    return categoryMatch && tagsMatch;
  });

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddArticle = () => {
    if (isEditing) {
      setArticles((prev) =>
        prev.map((article) =>
          article.id === currentArticleId
            ? { ...newArticle, id: currentArticleId }
            : article
        )
      );
    } else {
      setArticles((prev) => [
        ...prev,
        {
          ...newArticle,
          id: prev.length + 1,
          date: new Date().toISOString().split('T')[0],
        },
      ]);
    }
    setNewArticle({
      title: '',
      category: 'Industry News',
      tags: [],
      excerpt: '',
      content: '',
      author: '',
      date: '',
      image: '',
    });
    setModalIsOpen(false);
    setIsEditing(false);
    setCurrentArticleId(null);
  };

  const handleEditArticle = (article) => {
    setNewArticle(article);
    setIsEditing(true);
    setCurrentArticleId(article.id);
    setModalIsOpen(true);
  };

  const handleDeleteArticle = (id) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };

  const openAddModal = () => {
    setNewArticle({
      title: '',
      category: 'Industry News',
      tags: [],
      excerpt: '',
      content: '',
      author: '',
      date: '',
      image: '',
    });
    setIsEditing(false);
    setCurrentArticleId(null);
    setModalIsOpen(true);
  };

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Noticias & Novedades
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl opacity-90 mb-8"
          >
            Manténgase actualizado con las últimas noticias, eventos e historias
            de la comunidad CGERA.
          </motion.p>
        </div>
      </div>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Categorias
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Tag className="inline-block w-4 h-4 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Article Button */}
      {isAuthenticated && (
        <section className="py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex"
            >
              <button
                onClick={openAddModal}
                className="btn btn-soft btn-active border-none  flex align-middle bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm font-medium"
              >
                <SquarePlus className="w-5 h-5 mr-2" />
                Nueva Publicación
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="h-48 w-full relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {format(new Date(article.date), 'MMM d, yyyy')}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between p-4 rounded-lg mt-auto">
                      {/* Social Share */}
                      <div className="flex items-center justify-end">
                        <div className="flex space-x-2">
                          <FacebookShareButton url={window.location.href}>
                            <FacebookIcon size={32} round />
                          </FacebookShareButton>
                          <TwitterShareButton url={window.location.href}>
                            <TwitterIcon size={32} round />
                          </TwitterShareButton>
                          <LinkedinShareButton url={window.location.href}>
                            <LinkedinIcon size={32} round />
                          </LinkedinShareButton>
                        </div>
                      </div>

                      {/* Edit and Delete Buttons */}
                      {isAuthenticated && (
                        <div className="flex justify-start items-center space-x-2">
                          <button
                            onClick={() => handleEditArticle(article)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteArticle(article.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Adding/Editing Article */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Agregar Nueva Publicación"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black/30 backdrop-opacity-95"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-sm mx-auto ">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {isEditing ? 'Editar Publicación' : 'Agregar Nueva Publicación'}
          </h3>
          <div className="space-y-4 text-gray-500">
            <input
              type="text"
              name="title"
              value={newArticle.title}
              onChange={handleInputChange}
              placeholder="Título"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <select
              name="category"
              value={newArticle.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="tags"
              value={newArticle.tags.join(', ')}
              onChange={(e) =>
                setNewArticle((prev) => ({
                  ...prev,
                  tags: e.target.value.split(', '),
                }))
              }
              placeholder="Tags (separados por comas)"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              name="excerpt"
              value={newArticle.excerpt}
              onChange={handleInputChange}
              placeholder="Extracto"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <textarea
              name="content"
              value={newArticle.content}
              onChange={handleInputChange}
              placeholder="Contenido"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              name="author"
              value={newArticle.author}
              onChange={handleInputChange}
              placeholder="Autor"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              name="image"
              value={newArticle.image}
              onChange={handleInputChange}
              placeholder="URL de la imagen"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setModalIsOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddArticle}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isEditing ? 'Guardar Cambios' : 'Agregar Publicación'}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewsPage;
