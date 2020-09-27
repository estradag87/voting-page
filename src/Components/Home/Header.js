import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../App/App.css';


class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Rule of Thumb</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/PastTrials">Past Trials</Nav.Link>
              <Nav.Link href="#features">How It Works</Nav.Link>
              <Nav.Link href="#pricing">Log In/Sign Up</Nav.Link>
            </Nav>
            <Button variant="outline-info">Search</Button>
          </Navbar>
        </>
      </div>
    );
  }
}

export default Header;