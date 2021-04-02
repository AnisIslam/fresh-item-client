import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import  firebase from "firebase/app";
import "./Header.css";
export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(function () {
      const newUser = {
        name: "",
        email: "",
      };
      return newUser;
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

const Header = () => {
  const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
  let history = useHistory();

  console.log(loggedInUser);

  const signOut = () => {
    handleSignOut().then((res) => setLoggedInUser(res));
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand onClick={() => history.push("/")}>
          <h1>Fresh Food</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => history.push("/home")}>Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/orders")}>Orders</Nav.Link>
            <Nav.Link onClick={() => history.push("/admin")}> Admin</Nav.Link>
            <Nav.Link>Deals</Nav.Link>
            
            {loggedInUser.email ? (
              <>
                <Nav.Link>{loggedInUser.name}</Nav.Link>
                <Nav.Link onClick={signOut}>SignOut</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  onClick={() => history.push("/login")}
                  className="btn btn-primary"
                >
                  LogIn
                </Nav.Link>
              </>
            )}
{/* 
            {loggedInUser.email === "manisul1997bd@gmail.com" && (
              <Nav.Link
                onClick={() => history.push("/adminHome")}
                className="btn btn-info"
              >
                Admin
              </Nav.Link>
            )} */}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;