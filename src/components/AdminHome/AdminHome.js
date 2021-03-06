import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";



const AdminHome = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    let history = useHistory();

    return (
        <div className='container'>
            <Button onClick={() => history.push("/addProduct")} variant="danger">Add Product </Button> <span> </span>
            <Button onClick={() => history.push("/manageProduct")} variant="info">Manage Product</Button>         
        </div>
    );
};

export default AdminHome;