import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home";
import MissionPanel from "../missions/mission-panel";
import LaunchPanel from "../launches/launch-panel";
const logo = require("../../spaceX_logo.png");

class NavBarComponent extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt="spaceX"
              src={logo}
              width="150"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="/missions">Missions</Nav.Link>
            <Nav.Link href="/launches">Launches</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/missions">
            <MissionPanel />
          </Route>
          <Route exact path="/launches">
            <LaunchPanel />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBarComponent;
