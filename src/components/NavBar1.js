

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';


function NavBar1() {
  return (
    <>
      <Navbar  bg="dark" data-bs-theme="dark" expand="lg" >
        <Container>

            <Navbar.Brand href="#home" style={{ fontFamily: 'Playwrite HU', fontSize: '28px' }}>Home</Navbar.Brand>
            <img src='/svgs/love-letter-svgrepo-com.svg' style={{ height: '40px' }}></img>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar1;