import React, { Component } from "react";
import axios from "axios";

class Mecsek extends Component {
  constructor() {
    super();
  this.handleClick = this.removeHello.bind(this);
    this.state = {
      fbuser: null
    };
  }
  componentWillMount = () => {
    fetch("http://localhost:52210/getuser/" + this.props.id, {
      mode: "cors"
    })
      .then(res => res.json())
      .then(fbuser => {
        this.setState({ fbuser });
      });
  };
removeHello (idke, socialke) {
  axios.get('http://localhost:52210/removehelloitsme/' + this.state.fbuser.fbId + "/" + idke + "/" + socialke)
  setTimeout(this.componentWillMount, 300);
  }
  removeSighting (idke) {
    axios.get('http://localhost:52210/removesighting/' + this.state.fbuser.fbId + "/" + idke)
    setTimeout(this.componentWillMount, 300);
  }

  render() {
    if (this.props.id === null || this.state.fbuser === null) {
      return <h1> </h1>;
    }
    return (
      <React.Fragment>
        {this.state.fbuser.sightings.map(element => (
          <div id="match">
            <h4 className="match-day"><br/>{element.message} <br/> {element.day}</h4>
          {element.helloItsMes.map(hello => (
            <div className="match-container">
                <div className="match-applicant">
                  <button
                    className="megsem"
                    onClick={() => this.removeHello(element.id, hello.socialHandle)}
                  >
                    x
                  </button>
                  <img
                    src={hello.picture}
                    className="match-picture"
                    alt="seems familiar?"
                  />
                  <div className="match-text">
                    <p className="match-message">{hello.message}</p>
                    <h4 className="match-handle">{hello.socialHandle}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Mecsek;
