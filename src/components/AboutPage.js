import React from 'react';
import '../index.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <h2>About Pokédex</h2>
            <p>
                The Pokédex is a comprehensive catalog that provides detailed information about various Pokémon species.
                It serves as an essential tool for Pokémon trainers, aiding them in their journey to become skilled trainers.
                With the help of the Pokédex, trainers can access crucial information such as each Pokémon's type, statistics,
                abilities, height, weight, and other relevant attributes.
            </p>
            <p>
                This Pokédex application is built using React and integrates data from the PokéAPI, providing a user-friendly interface
                for browsing and exploring Pokémon data. It supports features such as displaying a list of Pokémon with pagination controls
                and enabling users to access additional information about a selected Pokémon.
            </p>
            <p>
                Enjoy your journey of discovering and learning more about the fascinating world of Pokémon with this interactive and intuitive Pokédex!
            </p>
        </div>
    );
};

export default AboutPage;

