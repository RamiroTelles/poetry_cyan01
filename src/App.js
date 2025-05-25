
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from "./components/NavBar1";
import ListPoem from './components/ListPoem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  //uqunROA
  return (
    <>
      <NavBar1></NavBar1>
      <Container>
        <Row>
          <h1 className='text-center mt-3' style={{ fontFamily: 'Poetsen One'}}>Poemas solo para ti</h1>
        </Row>
        <Row>
          <ListPoem></ListPoem>
        </Row>
        
      </Container>
    </>
  );
}

export default App;
