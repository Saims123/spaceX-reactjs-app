import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/navbar/navbar';
import MissionPanel from './components/missions/mission-panel';
import LaunchPanel from './components/launches/launch-panel';


const App: React.FC = () => {
  return (
    <div className='App'>
      <NavBarComponent />
      <Router>
        <Route path='missions'/>
        <Route path='launches' />
      </Router>
      <MissionPanel></MissionPanel>
     <LaunchPanel></LaunchPanel>
    </div>
  );
}

export default App;
