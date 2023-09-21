import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const header = () => {
  return (
    <header className='bg-dark'>
      <Container >
      <nav className="">
        <a href="home.php">

          <div className="logo">
            <img src="/logoAIyellow.png" alt=""/>
            <h1>TecBlog</h1>
          </div>
        </a>
    <ul>
      <li><a href="#"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" beat />Blog</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Escrever</a></li>


    </ul>
      </nav>



      </Container>
    </header>

    )
}

export default header