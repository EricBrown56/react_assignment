// src/components/MoviesList.jsx

import React, { useState } from 'react';


const MoviesList = () => {
    const [movies, setMovies] = useState(["Cube", "The Thing", "Terrifier", 
        "They Live", "Dodge Ball", "Office Space", "Evil Dead 2", 
        "Pee Wee's Big Adventure", "Galaxy Quest"]);

    
    const [description, setDescription] = useState(["a group of people trapped in a maze of death",
        "a group of scientists in Antarctica are hunted by an alien", "a clown terrorizes a town",
        "a drifter discovers sunglasses that reveal the truth", "a group of misfits compete in a dodge ball tournament",
        "a group of office workers rebel against their boss", "a group of people are trapped in a cabin with evil spirits",
        "a mans bike is stolen and he goes on a cross country adventure to find it", "a group of actors are mistaken for real space heroes"]);
            
        
//For each movie, implement a feature that toggles additional details (like a brief description) when the movie title is clicked.

    const changeMovies = () => {




    
    

    return (
        <div>
            
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>

            <p>
                Hello, this movie is called {movies} and it is about {description}
            </p>

            <button onClick={changeMovies}>Next Movie</button>
        </div>
    );

    };

};
        


export default MoviesList;