import React, { useContext, useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(
            "https://shrouded-temple-26979.herokuapp.com/orders?email=" + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            //   body: JSON.stringify(orderDetails)
        })
            .then((res) => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    console.log(orders);

    return (
        <div className='container' >
            <h1>Your Total Orders</h1>
           <div className='d-flex row m-2 p-2 text-center'>
           {
                orders.map(order =>

                    <Card className='m-2 text-white' bg='info' border="info" style={{ width: '18rem' }}>
                        <Card.Header>Your Order</Card.Header>
                        <Card.Body>
                            <Card.Title>{order.products.name}</Card.Title>
                            <Card.Text>
                                Price: {order.products.price}
                        </Card.Text>
                        </Card.Body>
                    </Card>

                )

            }
           </div>

        </div>
    );
};

export default Order;