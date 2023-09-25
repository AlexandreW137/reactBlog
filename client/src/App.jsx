import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Carousel from 'react-bootstrap/Carousel';
import Carrossel from './components/carrossel';
function App() {
  return (
   <>
   <Carrossel />
   </>
   
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;