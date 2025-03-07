import React from 'react';

const Article = ({ title, content }) => {
  return (
    <div className="article p-4 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Article;
