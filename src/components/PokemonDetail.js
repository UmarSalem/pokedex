import React, { useState, useEffect } from 'react';
import '../index.css';
import { useParams } from 'react-router-dom'; // Import useParams for fetching URL parameters

const PokemonDetail = () => {
    const { id } = useParams(); // Use useParams to retrieve the id from the URL
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPokemonData(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pokemon-detail">
            <h2>{pokemonData.name}</h2>
            <p>Type(s): {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
            <p>Stats:</p>
            <ul>
                {pokemonData.stats.map((stat, index) => (
                    <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
            <p>Abilities: {pokemonData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
        </div>
    );
};

export default PokemonDetail;
