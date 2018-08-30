import React, { Component } from "react";
import Infos from "./infobar.js";
import Map from "./map.js";
import Sidebar from "react-sidebar";

class Renderz extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount = () => {
    fetch("http://localhost:52210/matchfilter/5b87e343b8811a081c22b2b8", {
      mode: "cors"
    })
      .then(res => res.json())
      .then(users => this.setState({ users }));
  };

  onChild2ButtonClick = dataFromChild2 => {
    this.setState({
      infoIndex: dataFromChild2
    });
    this.onSetSidebarOpen(true);
  };

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div className="flexdaddy">
        <Sidebar
          sidebar={
            <div className="infochild">
              <Infos
                indexke={this.state.infoIndex}
                userDatas={this.state.users}
                className="infochild"
              />
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          pullRight={true}
        />
        <div className="mapchild">
          <Map onClick={this.onChild2ButtonClick} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default Renderz;
