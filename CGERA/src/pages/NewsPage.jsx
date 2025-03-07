import React, { useState } from 'react';
import { format } from 'date-fns';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';
import { Tag, Calendar, MessageCircle, Share2 } from 'lucide-react';

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

const articles = [
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
];

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [newComment, setNewComment] = useState('');

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

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt="News Header"
          />
          <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-75" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Noticias & Novedades
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Manténgase actualizado con las últimas noticias, eventos e historias
            de la comunidad CGERA.
          </p>
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

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 w-full relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
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

                  {/* Social Share */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5 text-gray-500" />
                    </div>
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
