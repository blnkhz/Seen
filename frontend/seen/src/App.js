import React, { Component } from 'react';
import logo from './TWC-logo.png';
import './App.css';
import NavbarFeatures from './components/navbar.js';
import Map from './components/map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures className="navbar" />
        <Map  className="map"/>
        <header className="App-header">
          <h1 className="App-title">Seenek vagyunk</h1>
        </header>
      </div>
    );
  }
}

export default App;
