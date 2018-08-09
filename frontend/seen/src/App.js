import React, { Component } from 'react';
import logo from './TWC-logo.png';
import './App.css';
import NavbarFeatures from './components/navbar.js';
import Map from './components/map.js'
import Seendex from './components/seendex.js'
import FooterPage from './components/footer.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Seen = () =>   
  <div className="App">
    <NavbarFeatures className="navbar" />
    <Map  className="map"/>
    <header className="App-header">
      <h1 className="App-title">Seenek vagyunk</h1>
    </header>
    <FooterPage/>
  </div>

const Have = () => 
  <div className="App">
    <NavbarFeatures className="navbar" />
    <header className="App-header">
      <h1 className="App-title">Seenek vagyunk</h1>
    </header>
  </div>

const routes = [
  {
    path: '/seen',
    component: Seen
  },
  {
    path: '/have',
    component: Have,
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Seendex/>
      <Router>
        <div>
        <NavbarFeatures className="navbar" />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
