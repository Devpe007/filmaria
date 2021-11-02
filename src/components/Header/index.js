import React from "react";
import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <header>
            <Link className="logo" to="/" >Filmaria</Link>
            <Link className="favoritos" to="/" >Salvos</Link>
        </header>
    );
};

export default Header;