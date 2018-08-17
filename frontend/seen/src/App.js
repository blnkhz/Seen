import React, { Component } from "react";
import "./App.css";
import NavbarFeatures from "./components/navbar.js";
import Map from "./components/map.js";
import Faq from "./components/faq.js";
import About from "./components/about.js";
import Seendex from "./components/seendex.js";
import AddMap from "./components/addmap.js";
import FooterPage from "./components/footer.js";
import Infobar from "./components/infobar.js";
import ItsAMatch from "./components/match.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Sightings = () => (
  <div className="App">
    <NavbarFeatures className="navbar" />
    <Map className="map" />
    <FooterPage />
  </div>
);

const Infobarr = () => (
  <div className="App">
    <NavbarFeatures className="navbar" />
    <Infobar />
    <FooterPage />
  </div>
);
const AboutUs = () => (
  <div className="App">
    <NavbarFeatures className="navbar" />
    <About className="About" />
    <FooterPage />
  </div>
);

const FrequentlyAsked = () => (
  <div className="App">
    <NavbarFeatures className="navbar" />
    <Faq className="Faq" />
    <FooterPage />
  </div>
);

const Add = () => (
  <div className="App">
    <NavbarFeatures className="navbar" />
    <AddMap className="map" />
    <FooterPage />
  </div>
);

const Start = () => (
  <div>
    <Seendex />
    <FooterPage />
  </div>
);

const Contact = () => (
  <div>
    <NavbarFeatures className="navbar" />
    <FooterPage />
  </div>
);

const Match = () => (
  <div>
    <NavbarFeatures className="navbar" />
    <ItsAMatch />
    <FooterPage />
  </div>
)

const routes = [
  {
    path: "/sightings",
    component: Sightings
  },
  {
    path: "/add",
    component: Add
  },
  {
    path: "",
    component: Start
  },
  {
    path: "/about",
    component: AboutUs
  },
  {
    path: "/faq",
    component: FrequentlyAsked
  },
  {
    path: "/infobar",
    component: Infobarr
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/itsamatch",
    component: Match
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
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
