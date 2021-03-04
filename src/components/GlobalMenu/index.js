import React from 'react';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
    return (
        <nav>
            <Link to="/productList">Lista de Produtos</Link>
            <Link to="/register">Cadastro de Produtos</Link>
        </nav>
    );
};

export default GlobalMenu;