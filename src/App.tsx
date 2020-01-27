import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/navbar/navbar";
import MissionPanel from "./components/missions/mission-panel";
import LaunchPanel from "./components/launches/launch-panel";
import Home from "./components/home";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
    </div>
  );
};

export default App;
