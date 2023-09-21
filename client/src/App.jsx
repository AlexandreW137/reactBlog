import React from 'react';
import ReactDOM from 'react-dom';
import BlogPosts from './components/BlogPosts';
function App() {
  return (
    <div>
      <h1>Meu Blog</h1>
      <BlogPosts /> 
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;