import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/navbar/navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
    </div>
  );
};

export default App;
