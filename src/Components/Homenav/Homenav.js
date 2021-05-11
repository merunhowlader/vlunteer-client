import React from "react";
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Homenav.css'


import bimage from '../../Images/logos/bimage.png';
import { NavLink, useHistory } from "react-router-dom";

const Homenav = () => {
    let brimage=bimage;
    let history = useHistory();

    const handleregister = () =>{
        history.push('/register')
    }
    const handlelogin= () =>{
      history.push('/login')
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
             <img src={brimage} alt=" barand" style={{ width:"100px"}}/>
        </Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link  ><NavLink  to="/">Home</NavLink></Nav.Link>
          <Nav.Link  ><NavLink  to="/volunteerlist">Volunteer List</NavLink></Nav.Link>
          <Nav.Link  ><NavLink  to="/events">Events</NavLink></Nav.Link>
          <Nav.Link  ><NavLink  to="/blog">Blog</NavLink></Nav.Link>
          <Button variant="primary" onClick ={handleregister}>Register</Button>{' '}
          <Button variant="secondary" onClick ={handlelogin}>login</Button>
        </Nav>
        
      </Navbar>

      <div className="headerDiv">
        <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
        <div>
          <input type="text"/>
          <Button variant="primary">Search</Button>
        </div>
      </div>

      
    </>
  );
};

export default Homenav;
