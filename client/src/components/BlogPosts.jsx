import React, { useEffect, useState } from 'react';
import './blogPost.css';
function BlogPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fazer uma solicitação ao servidor PHP para obter os dados dos posts
    fetch('http://localhost/gamerBlog/server/getPosts.php')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Erro ao obter os posts:', error));
  }, []);

  return (
    <div className="mainBlog">
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <h2>{post.titulo}</h2>
          <img src={post.imagem} alt={`Imagem de ${post.titulo}`} />
          <p>{post.descricao}</p>
          <a href={post.link}><span>Ler mais</span></a>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
