import React from 'react';
import Article from './Article';

const articles = [
  { id: 1, title: 'Artículo 1', content: 'Contenido del artículo 1' },
  { id: 2, title: 'Artículo 2', content: 'Contenido del artículo 2' },
  // Agrega más artículos aquí
];

const ArticleList = () => {
  return (
    <div className="article-list grid grid-cols-1 gap-4">
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default ArticleList;
