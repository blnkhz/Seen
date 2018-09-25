import React from "react";
import { Redirect } from "react-router-dom";

class Loading extends React.Component {
  state = {
    pic: require("../assets/loading2.gif"),
    redirect: false
  };
  componentDidMount() {
    setTimeout(() => this.setState({ redirect: true }), 2000);
  }

  render() {
    if (!this.state.redirect)
      return <img src={this.state.pic} className="load" alt="loading" />;
    else return <Redirect to="login" />;
  }
}

export default Loading;
