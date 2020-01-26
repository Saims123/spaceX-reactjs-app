import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/navbar/navbar';
import MissionPanel from './components/missions/mission-panel';


const App: React.FC = () => {
  return (
    <div className='App'>
      <NavBarComponent />
      <Router>
        <Route path='missions'/>
        <Route path='launches' />
      </Router>
      <MissionPanel></MissionPanel>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
