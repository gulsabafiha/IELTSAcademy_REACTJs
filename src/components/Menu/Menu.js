import { Container, Nav, Navbar} from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div >
  <Navbar bg="dark" fixed="top" variant="dark">
    <Container className='mx-auto '>
    <Navbar.Brand >IELTS Academy</Navbar.Brand>
          <Nav className="me-auto">
            <div  className='menu-div'>
            <NavLink className='menu' to="/home"
              activeStyle={{
              fontWeight: "bold",
              color: "rgb(167, 26, 26)",
            }}>Home</NavLink>
      <NavLink className='menu' to="/about" activeStyle={{
              fontWeight: "bold",
              color: "rgb(167, 26, 26)"
            }}>About</NavLink>
      <NavLink className='menu' to="/service" activeStyle={{
              fontWeight: "bold",
              color: "rgb(167, 26, 26)"
            }}>Service</NavLink>
            <NavLink className='menu' to="/contact" activeStyle={{
              fontWeight: "bold",
              color: "rgb(167, 26, 26)"
            }}>Contact</NavLink>
            </div>
    </Nav>
    </Container>
      </Navbar>
      <br />
   
    </div>
  );
};

export default Menu;