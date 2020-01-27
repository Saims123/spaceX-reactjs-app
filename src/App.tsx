import React from "react";
import "./App.css";
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
