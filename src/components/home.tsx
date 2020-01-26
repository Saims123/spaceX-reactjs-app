import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>SpaceX with ReactJS</h1>
        <p>
          This is a simple spaceX web app written with ReactJS in typescript.
          See API documentation at <a href="https://documenter.getpostman.com/view/2025350/RWaEzAiG?version=latest">SpaceX API Docs</a>
        </p>
      </Jumbotron>
    );
  }
}

export default Home;
