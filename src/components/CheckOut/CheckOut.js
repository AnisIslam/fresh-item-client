import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';


import { Redirect, useHistory, useParams } from "react-router-dom";
import { UserContext } from '../../App';

const CheckOut = ({ product }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);

    const { productName } = useParams();

    let history = useHistory();



    useEffect(() => {
        fetch(
            "https://shrouded-temple-26979.herokuapp.com/checkOut/" + productName
        )
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);

            });
    }, [productName]);

    console.log(products);
    const confirmOrder = () => {
        
        const orderDetails = { ...loggedInUser, products};

        fetch('https://shrouded-temple-26979.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
      .then(data => {
        if (data) {
        //   processOrder();
          alert('Your order placed successfully');

          history.push("/orders")

        }


    });

}

    return (
        <div className='container'>
            <h1>Checkout Here</h1>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{products.name}</td>
                        <td>1</td>
                        <td>${products.price}</td>
                    </tr>
                    <tr>
                        <td>Total </td>
                        <td> </td>
                        <td>${products.price} </td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={confirmOrder} variant="danger">Proceed Order </Button> <span> </span>


        </div>
    );
};

export default CheckOut;