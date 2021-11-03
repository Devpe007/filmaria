import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const myList = localStorage.getItem('movies');

        setMovies(JSON.parse(myList) || []);
    }, []);

    return (
        <div id="my-movies" >
            <h1>Meus Filmes</h1>

            <ul>
                {movies.map((item) => {
                    return (
                        <li key={item.id} >
                            <span>{item.nome}</span>

                            <div>
                                <Link to={`/filme/${item.id}`} >Ver detalhes</Link>
                                <button onClick={() => {}} >Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Favorites;