import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.scss';
import { BiSearch } from 'react-icons/bi';


class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <>
          <Navbar >
            <Navbar.Brand href="#home">Rule of Thumb</Navbar.Brand>
            <Nav className="positionNavBar">
              <Nav.Link href="/PastTrials">Past Trials</Nav.Link>
              <Nav.Link >How It Works</Nav.Link>
              <Nav.Link >Log In/Sign Up</Nav.Link>
              <Button><BiSearch /></Button>
            </Nav>
          </Navbar>
        </>
      </div>
    );
  }
}

export default Header;
