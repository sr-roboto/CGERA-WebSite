import React from 'react';
import ArticleList from '../components/ArticleList';

const BlogPage = () => {
  return (
    <div className="blog-page p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Novedades</h1>
        <p className="text-lg text-gray-600">Últimas noticias y artículos</p>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => (window.location.href = '/networking')}
          >
            Networking
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => (window.location.href = '/cgera-tv')}
          >
            CGERA TV
          </button>
        </div>
      </header>
      <main>
        <ArticleList />
      </main>
    </div>
  );
};

export default BlogPage;
