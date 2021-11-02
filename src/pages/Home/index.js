import React, { useEffect, useState } from "react";

import api from '../../services/api';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('/r-api/?api=filmes');
            
            setMovies(response.data);
        };

        loadMovies();
    }, []);
    
    return (
        <div>
            <h1>Página Home</h1>
        </div>
    );
};

export default Home;