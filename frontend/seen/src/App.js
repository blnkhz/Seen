import React, { Component } from "react";
import "./App.css";
import NavbarFeatures from "./components/navbar.js";
import Faq from "./components/faq.js";
import About from "./components/about.js";
import Seendex from "./components/seendex.js";
import AddMap from "./components/addmap.js";
import FooterPage from "./components/footer.js";
import Renderz from "./components/renderMap.js";
import ItsAMatch from "./components/match.js";
import LoginPage from "./components/loginpage.js";
import Profile from "./components/profile.js";
import { BrowserRouter as Router, Route} from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fbUser:{
        isLoggedIn: false,
        fbId: null,
        name: "",
        email: "",
        picture: "",
        socialHandle: ""
      }
    };
  }

  responseFacebook = response => {
   this.setState({fbUser:{
      isLoggedIn: true,
      fbId: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    }
   });
   fetch("http://localhost:52210/adduser", {
    method: "POST",
    body: JSON.stringify(this.state.fbUser),
    mode: "cors",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).catch(error => `Error: ${error}`);
  fetch("http://localhost:52210/getuser/" + this.state.fbUser.fbId, {
    mode: "cors"})
    .then(res => res.json())
    .then(retek => {this.setState(prevState => ({fbUser: {...prevState.fbUser, socialHandle: retek.socialHandle }}))});
 };



  render() {
    console.log(this.state.fbUser)
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
        <Renderz FbUser={this.state.fbUser} />
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
        <AddMap FbId={this.state.fbUser.fbId} picture={this.state.fbUser.picture}/>
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
        <Profile user={this.state.fbUser} id={this.state.fbUser.fbId}  />
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
        path: "/login",
        component: Login
      },
      {
        path: "/add",
        component: Add
      },
      {
        path: "/",
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

    return (
      <Router>
        <div>
          <FacebookLogin
            appId="322492561654479"
            autoLoad={true}
            fields="name,email,picture.height(480)"
            callback={this.responseFacebook}
            render={renderProps => (
              <h3 onClick={renderProps.onClick} style={{display:!this.state.fbUser.isLoggedIn ? 'block': 'none'}}  className="login-button">login</h3>
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
