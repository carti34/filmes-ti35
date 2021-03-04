import React, { useEffect, useState } from 'react';
import PizzaCard from '../../components/PizzaCard';
import GlobalMenu from '../../components/GlobalMenu';
import api from '../../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    // const [search, setSearch] = useState('');

    const loadingProducts = async () => {
        // const response = await api.get(`/?apikey=925eba28&s=${search}`);
        const response = await api.get(`/products`);
        setProducts([]);
        if (response.data)
            setProducts(response.data);
    }

    useEffect(() => {
        loadingProducts();
    }, []);

    return (
        <>
            <GlobalMenu />
            <h1>Lista de Produtos</h1>
            {/* <div>
                <label htmlFor="search">Pesquisar:</label>
                <input
                    id="search"
                    name="search"
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
            </div> */}
            <ul>
                {products.map(p => {
                    return (
                        <li key={p.id}>
                            <PizzaCard pizza={p} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default ProductList;