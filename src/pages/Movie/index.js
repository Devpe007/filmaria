import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie() {
            const response = await api.get(`/r-api/?api=filmes/${id}`);
            
            setMovie(response.data);
            setLoading(false);
        };

        loadMovie();
    }, [id]);

    if(loading) {
        return (
            <div className="movie-info" >
                <h1>Carregando seu filme...</h1>
            </div>
        );
    };

    return (
        <div className="movie-info" >
            <h1>Página Detalhes - {id}</h1>
        </div>
    );
};

export default Movie;