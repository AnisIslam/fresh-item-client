import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Product.css'

const Product = ({ product }) => {
    const [products, setProducts] = useState([]);
    let history = useHistory();

    const handleBuyNowButton = (product) => {
        history.push(`/checkOut/${product.name}`);

    
    }

    useEffect(() => {
        fetch('https://shrouded-temple-26979.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="col-md-3 p-3 product">
            <img style={{ height: '300px', width:'200px' }} src={product.imageUrl} alt="" />
            <h3>{product.name}</h3>
            <h4>$ {product.price}</h4>
            <Button onClick={() => handleBuyNowButton(product)} variant="success">Buy Now</Button>
            {/* <button onClick={() => handleBuyNowButton(product)} >Buy Now</button> */}
        </div>
    );
};

export default Product;