import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPosts from './components/BlogPosts';
import Header from './components/template/header';
function App() {
  return (
    <div>
      <Header />
      <h1>Meu Blog</h1>
     <BlogPosts />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;