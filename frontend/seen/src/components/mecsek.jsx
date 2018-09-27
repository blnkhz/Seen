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
      .then(fbuser => {
        this.setState({ fbuser });
      });
  };
  render() {
    if (this.props.id === null || this.state.fbuser === null) {
      return <h1 style={{ margin: "200px" }}>SANYIKAM!</h1>;
    }
    return (
      <React.Fragment>
        {this.state.fbuser.sightings.map(element => (
          <div id="match">
            {element.helloItsMes.map(hello => (
              <div className="match-container">
              <h4 className="match-day">{element.day}</h4>
                <div className="match-applicant">
                <button className="megsem">x</button>
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
