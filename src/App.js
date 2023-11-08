import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import PokemonDetail from './components/PokemonDetail';
import './index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/pokedex" element={<PokemonList />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/pokemon/:id" element={<PokemonDetail />} /> {/* Adjust the path to use the id parameter */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
