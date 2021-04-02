import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import "./Login.css";
import { handleGoogleSignIn, initializeLoginFramework } from "./LoginManager";

// Initializing firebase
if (initializeLoginFramework.length == 0) {
  initializeLoginFramework();

}

const Login = () => {
  // state for storing logged in user data
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  document.title = "Login";

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  // Function to handle google signIN
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  return (
    <Container className="login-container my-5">
      <div className="form-container">
        <div className="m-auto input-form-container ">
          <h4 className="my-5 text-center">Sign In</h4>
          <div>
            <div onClick={googleSignIn} className="login-alternative">
              <img src="https://i.imgur.com/P9ZVhek.png" alt="" />
              <h6 className="m-1">Sign in with google</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;


// import { useContext, useState } from 'react';
// import { UserContext } from "../../App";
// import { useHistory, useLocation } from "react-router";
// import { handleGoogleSignIn, initializeLoginFramework, handleSignOut, handleFBSignIn, createUserEmailAndPassword, SignInWithEmailAndPassword } from './LoginManager';

// function Login() {
//   const [newUser, setNewUser] = useState(false);
//   const [user, setUser] = useState({
//     isSignedIn: false,
//     name: "",
//     email: "",
//     password: "",
//     photo: "",
//     error: "",
//     success: ""
//   });

//   initializeLoginFramework();

//   const [loggedInUser, setLoggedInUser] = useContext(UserContext); //set usercontext for checking login

//   const history = useHistory();
//   const location = useLocation();
//   let { from } = location.state || { from: { pathname: "/" } };

//   const googleSignIn = () => {
//     handleGoogleSignIn()
//       .then(res => {
//         handleResponse(res, true);
//       })
//   }

//   const fbSignIn = () => {
//     handleFBSignIn()
//       .then(res => {
//         handleResponse(res, true);
//       })
//   }

//   const signOut = () => {
//     handleSignOut()
//       .then(res => {
//         handleResponse(res, false);
//       })
//   }

//   const handleResponse = (res, redirect) => {
//     setUser(res);
//     setLoggedInUser(res);
//     if (redirect) {
//       history.replace(from);
//     }
//   }

//   //email pass submit auth functioanlities start
//   const handleSubmit = (event) => {
//     console.log(user.email, user.password);
//     if (newUser && user.email && user.password) {
//       createUserEmailAndPassword(user.name, user.email, user.password)
//         .then(res => {
//           handleResponse(res, true);
//         })
//     }

//     if (!newUser && user.email && user.password) {
//       SignInWithEmailAndPassword(user.email, user.password)
//         .then(res => {
//           handleResponse(res, true);
//         })
//     }
//     event.preventDefault();
//   }

//   //End email and password login functionalities

//   // change after clicking email login button

//   const handleChange = (event) => {
//     let isFieldValid = true;
//     if (event.target.name === "email") {
//       isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
//       //console.log(isFieldValid);
//     }
//     if (event.target.name === "password") {
//       const isPasswordValid = event.target.value.length > 6;
//       const passwordHasNumber = /\d{1}/.test(event.target.value);
//       isFieldValid = isPasswordValid && passwordHasNumber;
//     }
//     if (isFieldValid) {
//       const newUserInfo = { ...user };
//       newUserInfo[event.target.name] = event.target.value;
//       setUser(newUserInfo);
//     }
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       {
//         user.isSignedIn ? <button onClick={signOut}>Sign out</button> :
//           <button onClick={googleSignIn} className="btn btn-primary">Sign In</button>
//       }
//       {
//         user.isSignedIn &&
//         <div>
//           <p>Welcome, {user.name}</p>
//           <p>Email: {user.email}</p>
//           <img src={user.photo} alt="" />
//         </div>

//       }
//       <br />
//       <button onClick={fbSignIn} className="btn btn-info">Sign In by Facebook</button>

//       {/* //login by us */}

//       <h1>Our own Login</h1>
//       <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />
//       <label htmlFor="newUser">New User SignUp</label>
//       <form onSubmit={handleSubmit}>
//         {newUser && <input type="text" name="name" onBlur={handleChange} id="" />}
//         <br />
//         <input type="text" onBlur={handleChange} name="email" id="" placeholder="Email" required />
//         <br />
//         <input type="password" onBlur={handleChange} name="password" id="" placeholder="Password" required />
//         <br />
//         <input type="submit" value={newUser ? "Sign Up" : "Sign In"} className="btn btn-success" />
//       </form>
//       {
//         user.success && <p style={{ color: 'green' }}>User {newUser ? "Authentication" : "Login"} Success</p>
//       }
//       <p style={{ color: 'red' }}>{user.error}</p>
//     </div>
//   );
// }

// export default Login;
