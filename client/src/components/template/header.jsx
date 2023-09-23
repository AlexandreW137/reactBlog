import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
            <h1>Meu Blog tecnologico</h1>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none' }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
