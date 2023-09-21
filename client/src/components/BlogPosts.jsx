import React, { useEffect, useState } from 'react';
  import './BlogPost.css';

  function BlogPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Fazer uma solicitação ao servidor PHP para obter os dados dos posts
      fetch('http://localhost/reactBlog/server/getPosts.php')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Erro ao obter os posts:', error));
    }, []);

    return (
      <div className="blog-posts">
        {posts.map(post => (
          <div className="blog-post" key={post.id}>
            <img className="blog-post-image" src={post.imagem} alt={post.titulo} />
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.titulo}</h2>
              <p className="blog-post-description">{post.descricao}</p>
              <a className="blog-post-link" href={post.link}>Leia mais</a>
            </div>
          </div>
        ))}
      </div>
    );
  }


  export default BlogPosts;
