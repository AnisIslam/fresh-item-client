import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-temple-26979.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const deleteProduct = id =>{
        fetch(
            "https://shrouded-temple-26979.herokuapp.com/deleteProduct/" + id,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                const newProducts = products;
                setProducts(newProducts);
              }
            });

    }
    console.log(products);
    return (
        <div className='container'>
            {
                products.map(
                    (product) =>
<Table striped bordered hover size="sm">
  <tbody>
    <tr>
     
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>  <button  onClick={() => deleteProduct(product._id)}>Delete</button> </td>
    </tr>
    
  </tbody>
</Table>
                )
            }

        </div>
    );
};

export default ManageProduct;