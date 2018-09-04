import React, { Component } from "react";
import LoginMap from "./loginmap.js";

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
    const loginContent = (
      <div className="login-container">
        <img
          src={require("../assets/seenlogo.png")}
          className="seenlogo-login"
          alt="s e e n"
        />
        <div className="login-flex">
          <div className="login-firstcolumn">
            <h4>Have seen someone?<br></br>Been seen by someone?</h4>
          </div>
          <div className="login-map">
            <LoginMap users={this.state.users} />
          </div>
          <div className="login-thirdcolumn">
            <h4>Ide kell meg valami frappans szoveg</h4>
          </div>
        </div>
      </div>
    );
    return loginContent;
  }
}

export default LoginPage;
