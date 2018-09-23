import React, { Component } from "react";

class Mecsek extends Component {
  constructor() {
    super();
  this.state = {
    fbuser: null
  };
}
  componentWillMount = () => { 
    fetch("http://localhost:52210/getuser/" + this.props.id, {
      mode: "cors"
    })
      .then(res => res.json())
      .then(fbuser => {this.setState({ fbuser })});
  };
  render(
  ) {
    if (this.props.id === null || this.state.fbuser === null) {
      return <div>SANYIKAM!</div>;}
    const nyanyi =
      <h1>{console.log(this.state.fbuser)}</h1>;
    return nyanyi;
  }
}

export default Mecsek;