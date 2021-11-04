import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './styles.css';

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('movies');

        setMovies(JSON.parse(myList) || []);
    }, []);

    function handleDelete(id) {
        let movieFilter = movies.filter((item) => {
            return (item.id !== id);
        });

        setMovies(movieFilter);
        localStorage.setItem('movies', JSON.stringify(movieFilter));

        toast.success('Filme excluido com sucesso!');
    };

    return (
        <div id="my-movies" >
            <h1>Meus Filmes</h1>

            {movies.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul>
                {movies.map((item) => {
                    return (
                        <li key={item.id} >
                            <span>{item.nome}</span>

                            <div>
                                <Link to={`/filme/${item.id}`} >Ver detalhes</Link>
                                <button onClick={() => handleDelete(item.id)} >Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Favorites;