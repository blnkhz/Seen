import React, { Component } from "react";
import Infos from "./infobar.js";
import Map from "./map.js";

class Renderz extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount = () => {
    fetch('http://localhost:52210/beenseen', {
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
      <div className="flexdaddy">
        <div className="mapchild">
          <Map onClick={this.onChild2ButtonClick} users={this.state.users} />
        </div>
        <div className="infochild">
          <Infos
            indexke={this.state.infoIndex}
            userDatas={this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default Renderz;
