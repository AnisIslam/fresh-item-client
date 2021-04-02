import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-temple-26979.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="row container text-center products">
            {
                products.map(product => <Product product ={product}></Product>)
            }
            
        </div>
    );
};

export default Home;