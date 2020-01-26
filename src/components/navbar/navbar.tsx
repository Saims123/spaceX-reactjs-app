import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
const logo = require('../../spaceX_logo.png');

class NavBarComponent extends Component {
    render() {
        return (
          <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='home'>
              <img alt='spaceX' src={logo} width='150' height='45' className='d-inline-block align-top' />
            </Navbar.Brand>
            <Nav className='mr-auto'>
              <Nav.Link href='missions'>Missions</Nav.Link>
              <Nav.Link href='launches'>Launches</Nav.Link>
            </Nav>
          </Navbar>
        );
    }
}

export default NavBarComponent;