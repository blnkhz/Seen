import React, { Component } from "react";
import Map from "./map.js";
import Infos from "./infobar.js";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    fetch("https://raw.githubusercontent.com/blnkhz/Seen/master/db.json", {
      mode: "cors"
    })
      .then(res => res.json())
      .then(users => this.setState({ users }));
  };

  onChild2ButtonClick = dataFromChild2 => {
    this.setState({
      infoIndex: dataFromChild2
    });
  };

  render() {
    return (
      <div className="login-container">
        <img
          src={require("../assets/seenlogo.png")}
          className="seenlogo-login"
          alt="s e e n"
        />
        <div className="login-map">
          <Map users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default LoginPage;
