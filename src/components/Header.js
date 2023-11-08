import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../index.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Pokédex</h1>
            <nav>
            <a href="/HomePage">HomePage</a>
            <a href="/about">About</a>
                <a href="/pokedex">Pokédex</a>
                <a href="/Contact">Contact</a>
                
            </nav>
        </header>
    );
};

export default Header;
