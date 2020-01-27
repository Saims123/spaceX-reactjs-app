import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home";
import MissionPanel from "../missions/mission-panel";
import LaunchPanel from "../launches/launch-panel";
import FullDetailedLaunch from "../launches/full-detail-launch";
import env from "../../../package.json";
const logo = require("../../spaceX_logo.png");

class NavBarComponent extends Component {
  render() {
    return (
      <Router basename={env.homepage}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href={`${env.homepage}`}>
            <img
              alt="spaceX"
              src={logo}
              width="150"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Item><Link to="/missions">Missions</Link></Nav.Item>
            <Nav.Item><Link to="/launches">Launches</Link></Nav.Item>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
  
          <Route path="/missions" component={MissionPanel} />

          <Route path="/launches" component={LaunchPanel} />

          <Route
            exact
            path="/launch/:flight_number"
            component={FullDetailedLaunch}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default NavBarComponent;
