import React, { Component } from "react";

const naan = "none";
const blokk = "inline";

class Infobar extends Component {
  constructor(props) {
    super(props);
    this.state = { display: naan };
    this.changeDisplay = this.changeDisplay.bind(this);
  }
  changeDisplay() {
    const newDisplay = this.state.display == naan ? blokk : naan;
    this.setState({ display: newDisplay });
  }

  render() {
    return (
      <div className="blankaprobalkozik">
        <button onClick={this.changeDisplay}>Try it</button>
        <div style={{ display: this.state.display }}>
          <h4 className="seenpropertytitle">Gender</h4>
          <p className="seenswer">Male</p>
          <h4 className="seenpropertytitle">Hair</h4>
          <p className="seenswer">Special, Medium</p>
          <h4 className="seenpropertytitle">Glasses</h4>
          <p className="seenswer">yea boii</p>
          <h4 className="seenpropertytitle">Message</h4>
          <p className="seenswer">Male</p>
        </div>
      </div>
    );
  }
}

export default Infobar;
