
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import Order from './components/Order/Order';
import AdminHome from './components/AdminHome/AdminHome';
import ManageProduct from './components/ManageProduct/ManageProduct';

export const UserContext = createContext();
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>{loggedInUser.email}</p>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/orders">
            <Order></Order>
          </Route>

          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>

          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <AdminHome></AdminHome>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>

          </Route>

          <PrivateRoute path="/checkOut/:productName">
            <CheckOut></CheckOut>

          </PrivateRoute>

          <PrivateRoute path="/order">
            <Order></Order>

          </PrivateRoute>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>

      </Router>

    </UserContext.Provider>
  );
}

export default App;
