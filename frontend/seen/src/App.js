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
import Loading from "./components/loading.js";
import Profile from "./components/profile.js";
import Meccsek from "./components/mecsek.jsx";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      fbUser: {
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
    this.setState({
      fbUser: {
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
      mode: "cors"
    })
      .then(res => res.json())
      .then(retek => { this.setState(prevState => ({ fbUser: { ...prevState.fbUser, socialHandle: retek.socialHandle } })) });
  };

  render() {
    console.log(this.state.fbUser);

    const Load = () => (
      <div className="App">
        <NavbarFeatures user={this.state.fbUser} className="navbar"/>
        <Loading />
        <FooterPage />
      </div>
    );

    const Login = () => (
      <div className="App">
        <LoginPage/>
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
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <AddMap FbId={this.state.fbUser.fbId} picture={this.state.fbUser.picture} />
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
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <Profile user={this.state.fbUser} id={this.state.fbUser.fbId} />
        <FooterPage />
      </div>
    );

    const Contact = () => (
      <div>
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <FooterPage />
      </div>
    );

    const Mecsek = () => (
      <div>
        <NavbarFeatures user={this.state.fbUser} className="navbar" />
        <Meccsek id={this.state.fbUser.fbId} style={{marginTop:'200px'}}/>
        <FooterPage />
      </div>
    );
    console.log(this.state.fbUser.isLoggedIn);
    console.log(this.state.loaded);
    return (
      <Router>
        <div>
          <FacebookLogin
            appId="322492561654479"
            autoLoad={true}
            fields="name,email,picture.height(480)"
            callback={this.responseFacebook}
            onFailure={this.puki}
            render={renderProps => (
              <h3 onClick={renderProps.onClick} style={{ display: !this.state.fbUser.isLoggedIn ? 'block' : 'none' }} className="login-button">login</h3>
            )}
          />
          <Switch>
            <Route exact path="/profile" render={() => (this.state.fbUser.isLoggedIn ? <ProfilePage /> : <Load />)} />
            <Route exact path="/itsamatch" render={() => (this.state.fbUser.isLoggedIn ? <Mecsek /> : <Load />)} />
            <Route exact path="/contact" render={() => (this.state.fbUser.isLoggedIn ? <Contact /> : <Load />)} />
            <Route exact path="/faq" render={() => (this.state.fbUser.isLoggedIn ? <FrequentlyAsked /> : <Load />)} />
            <Route exact path="/about" render={() => (this.state.fbUser.isLoggedIn ? <AboutUs /> : <Load />)} />
            <Route exact path="/" render={() => (this.state.fbUser.isLoggedIn ? <Start /> : <Login />)} />
            <Route exact path="/add" render={() => (this.state.fbUser.isLoggedIn ? <Add /> : <Load />)} />
            <Route exact path="/login" render={() => (this.state.fbUser.isLoggedIn ? <Start /> : <Login />)} />
            <Route exact path="/sightings" render={() => (this.state.fbUser.isLoggedIn ? <Sightings /> : <Load />)} />
            <Route exact path="/load" render={() => ( <Load />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
