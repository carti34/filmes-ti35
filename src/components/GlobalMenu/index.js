import React from 'react';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/productList" target="_blank">Lista de Produtos</Link>
            <Link to="/register">Cadastro de Produtos</Link>
        </nav>
    );
}

export default GlobalMenu;