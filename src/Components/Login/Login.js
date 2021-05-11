import React, { useContext, useState } from "react";
import bimage from "../../Images/logos/bimage.png";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { Button, Form } from 'react-bootstrap';


import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  

  const imgClick=() => {
      history.push('/')
  }

  //const history=useHistory();
  const [user,setUser]=useState({
    isSignedIn:false,
    name:'',
    email:'',
    photo:''
});

const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  

  let { from } = location.state || { from: { pathname: "/" } };


const provider = new firebase.auth.GoogleAuthProvider();

const handleSignIN=() => {
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
       const {displayName,email,photoUrl} =res.user;
        const signedInUser={
            isSignedIn:true,
            name:displayName,
            email:email,
            photo:photoUrl

        }
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        // history.push('/events');
        history.replace(from);

    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

const handleSignOut=()=>{

    firebase.auth().signOut().then(() => {
        const signedOutUser={
            isSignedIn:false,
            name:'',
            photo:'',
            email:''
        }
        setUser(signedOutUser);
      }).catch((error) => {
        // An error happened.
      });

}

  const handleSubmit = ()=>{

  }
  
  const handleChange=(e)=>{
    let isFormvlaid=false;
    if(e.target.name==='email'){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isFormvlaid=re.test(String(e.target.value).toLowerCase());
    }

    if(e.target.name==='password'){
          if(e.target.value.length>5){
            isFormvlaid=true;
          }
          else{
            
          }
    };
  }
  return (
    <div className="loginMain">
      <img src={bimage} alt=" barand" style={{ width: "300px" }} onClick={imgClick}/>
      <div className="loginBox">
        {/* <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  required/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <form action={handleSubmit}>
            <input type="text" name="email" onBlur={handleChange} placeholder="Enter email" required/>
            <input type="password" name="password" onBlur={handleChange} placeholder="Enter email" required/>
            <br/>
            <input type="submit" value="Submit"/>
          </form>
        </div> */}
        <div className="loginWithGoogle">
          <Button onClick={handleSignIN}>
            <FcGoogle />
            {`  `}Continue with google
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
