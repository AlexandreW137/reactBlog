import React from 'react';
import './App.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';
import Header from './components/template/header';
import Carrossel from './components/carrossel';
function App() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("form enviado");   
   };
  
  return (

    <>
      <Header />

      <Carrossel />
    
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
export default App;
