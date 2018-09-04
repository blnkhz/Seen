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
import Renderz from "./components/renderMap.js";
import ItsAMatch from "./components/match.js";
import LoginPage from "./components/loginpage.js";
import Profile from "./components/profile.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fbUser:{
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
      }
    };
  }

  responseFacebook = response => {
    console.log(response);

   this.setState({fbUser:{
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    }
   });
   console.log(this.state.fbUser);
 };

  render() {
    

    const Login = () => (
      <div className="App">
        <LoginPage>
        </LoginPage>
        <FooterPage />
      </div>
    );
    
    const Sightings = () => (
      <div className="App">
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <Renderz />
        <FooterPage />
      </div>
    );
    
    const Infobarr = () => (
      <div className="App">
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <Infobar />
        <FooterPage />
      </div>
    );
    const AboutUs = () => (
      <div className="App">
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <About className="About" />
        <FooterPage />
      </div>
    );
    
    const FrequentlyAsked = () => (
      <div className="App">
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <Faq className="Faq" />
        <FooterPage />
      </div>
    );
    
    const Add = () => (
      <div className="App">
        <NavbarFeatures user={this.state.fbUser} className="navbar"/>
        <AddMap />
        <FooterPage />
      </div>
    );
    
    const Start = () => (
      <div>
        <Seendex />
        <FooterPage />
      </div>
    );
    
    const ProfilePage = () => (
      <div className="App">
        <NavbarFeatures user={this.state.fbUser} className="navbar"/>
        <Profile user={this.state.fbUser}  />
        <FooterPage />
      </div>
    );
    
    const Contact = () => (
      <div>
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <FooterPage />
      </div>
    );
    
    const Match = () => (
      <div>
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <ItsAMatch />
        <FooterPage />
      </div>
    );
    
    const routes = [
      {
        path: "/sightings",
        component: Sightings
      },
      {
        path: "/",
        component: Login
      },
      {
        path: "/add",
        component: Add
      },
      {
        path: "/index",
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
      },
      {
        path: "/profile",
        component: ProfilePage
      }
    ];

    const LOGINEK =() => {
      return(
      <FacebookLogin
          appId="322492561654479"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={renderProps => (
            <a href="/index"><h3 onClick={renderProps.onClick} className="login-button login-thirdcolumn">login</h3></a>
          )}
        />
      )};
    return (
      <Router>
        <div>
          <FacebookLogin
            appId="322492561654479"
            autoLoad={true}
            fields="name,email,picture.height(480)"
            callback={this.responseFacebook}
            render={renderProps => (
              <a  href="/index"><h3 onClick={renderProps.onClick} style={{display:!this.state.fbUser.isLoggedIn ? 'block': 'none'}}  className="login-button login-thirdcolumn">login</h3></a>
            )}
          />
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
