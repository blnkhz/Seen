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
    fetch("http://localhost:52210/readuserwithmatches/" + this.props.id, {
      mode: "cors"
    })
      .then(res => res.json())
      .then(fbuser => {
        this.setState({ fbuser });
      });
  };
  removeHello(idke, helloFbId) {
    axios.get(
      "http://localhost:52210/removehelloitsme/" +
        this.state.fbuser.fbId +
        "/" +
        idke +
        "/" +
        helloFbId
    ).then(this.componentWillMount);
  }
  removeSighting(idke) {
    axios.get(
      "http://localhost:52210/removesighting/" +
        this.state.fbuser.fbId +
        "/" +
        idke
    ).then(this.componentWillMount);
  }

  render() {
    if (this.props.id === null || this.state.fbuser === null) {
      return <h1> </h1>;
    }
    return (
      <React.Fragment>
        {this.state.fbuser.sightings.map(element => (
          <div id="match">
            <button
              className="megsem-sighting"
              onClick={() => this.removeSighting(element.id)}
            >
              x
            </button>
            <h4 className="match-day">
              <br />
              {element.message} <br /> {element.day}
            </h4>
            {element.matches.map(hello => (
              <div className="match-container">
                <div className="match-applicant">
                  <button
                    className="megsem-meccs"
                    onClick={() =>
                      this.removeHello(element.id, hello.helloFbId)
                    }
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
