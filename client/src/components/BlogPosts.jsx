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

  const postElements = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    postElements.push(
      <div className="post" key={i}>
        <h2>{post.titulo}</h2>
        <img src={post.imagem} alt={`Imagem de ${post.titulo}`} />
        <p>{post.descricao}</p>
        <a href={post.link}><span>Ler mais</span></a>
      </div>
    );
  }

  return (
    <div className="mainBlog">
      {postElements}
    </div>
  );
}

export default BlogPosts;
