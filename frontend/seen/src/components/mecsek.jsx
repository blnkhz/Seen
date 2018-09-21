import React, { Component } from "react";
import { NavLink } from "mdbreact";

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
      <div id="match-container">
        {this.state.fbuser.sightings.map(element => (
          <div className="meccsiz">
            <h1>{element.day}</h1>
            {element.helloItsMes.map(hello => (
              <div className="sighting-applicants">
                <h4>{hello.socialHandle}</h4>
                <img src={hello.picture} />
                <p>{hello.message}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Mecsek;
