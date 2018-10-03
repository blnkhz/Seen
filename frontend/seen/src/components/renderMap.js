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

  componentWillMount = () => {
    fetch("http://localhost:52210/matchfilter/" + this.props.FbUser.fbId, {
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

  onSetSidebarClose=()=> {
    this.setState({ sidebarOpen: false });
  }

  render() {
    return (
      <div className="flexdaddy">
        <Sidebar
          sidebar={
            <div className="infochild">
                <button onClick={this.onSetSidebarClose} className="infobar-closebutton"> →</button>
              <Infos
                FbUser={this.props.FbUser}
                indexke={this.state.infoIndex}
                userDatas={this.state.users}
                
              />
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          pullRight={true}
        />
        <div className="mapchild">
          <Map setKeksz={this.onChild2ButtonClick} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default Renderz;
