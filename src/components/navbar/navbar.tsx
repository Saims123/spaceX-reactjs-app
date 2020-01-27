import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home";
import MissionPanel from "../missions/mission-panel";
import LaunchPanel from "../launches/launch-panel";
import FullDetailedLaunch from '../launches/full-detail-launch';
import env from '../../../package.json';
const logo = require("../../spaceX_logo.png");

class NavBarComponent extends Component {
  render() {
    return (
      <Router basename="/">
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href={`${env.homepage}`}>
            <img alt='spaceX' src={logo} width='150' height='45' className='d-inline-block align-top' />
          </Navbar.Brand>

          <Nav className='mr-auto'>
            <Nav.Link href={`${env.homepage}/missions`}>Missions</Nav.Link>
            <Nav.Link href={`${env.homepage}/launches`}>Launches</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path=''>
            <Home />
          </Route>
          <Route path='missions'>
            <MissionPanel />
          </Route>
          <Route path='launches'>
            <LaunchPanel />
          </Route>
          <Route exact path='launch/:flight_number' component={FullDetailedLaunch}></Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBarComponent;
