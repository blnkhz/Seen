import React, { Component } from 'react';
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

const Sightings = () =>   
  <div className="App">
    <NavbarFeatures className="navbar" />
    <Map className="map"/>
    <header className="App-header">
      <h1 className="App-title">Seenek vagyunk</h1>
    </header>
    <FooterPage/>
  </div>

const Add = () => 
  <div className="App">
    <NavbarFeatures className="navbar" />
    <header className="App-header">
      <h1 className="App-title">Seenek vagyunk</h1>
    </header>
  </div>

const Start = () => 
<div>
  <Seendex/>
</div>

const routes = [
  {
    path: '/sightings',
    component: Sightings
  },
  {
    path: '/add',
    component: Add,
  },
  {
    path: '',
    component: Start,
  }
]

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact path={route.path}
                component={route.component}
              />
            ))}
        </div>
      </Router>
    );
  }
}

export default App;
