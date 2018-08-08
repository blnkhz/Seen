import React, { Component } from 'react';
import logo from './TWC-logo.png';
import './App.css';
import NavbarFeatures from './components/navbar.js';
import Map from './components/map.js'
import Seendex from './components/seendex.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Seendex/>
        <header className="App-header">
          <h1 className="App-title">Seenek vagyunk</h1>
        </header>
      </div>
    );
  }
}

export default App;
