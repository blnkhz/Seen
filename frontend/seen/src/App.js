import React, { Component } from 'react';
import logo from './TWC-logo.png';
import './App.css';
import NavbarFeatures from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures className="navbar" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Seenek vagyunk</h1>
        </header>
        <p className="App-intro">
          Itt nagyon sok okosság lesz!
        </p>
      </div>
    );
  }
}

export default App;
