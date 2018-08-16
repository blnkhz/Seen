import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import Infos from './infobar.js';
import maplayout from "./mapstyle.js";

class Map extends Component {
  state = { users: [], clickedIndex: null };

  componentDidMount = () => {
    fetch("http://localhost:52210/beenseen", { mode: "cors" })
      .then(res => res.json())
      .then(users => this.setState({ users }));
  };

  changeClickedIndex(id) {
    this.setState({
      clickedIndex: id
    });
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 47.507589, lng: 19.066128 }}
        defaultZoom={13}
        defaultOptions={{
          streetViewControl: true,
          scaleControl: false,
          mapTypeControl: false,
          panControl: true,
          zoomControl: true,
          rotateControl: true,
          fullscreenControl: true,
          styles: maplayout
        }}
      >
        {this.state.users.map((element, index) => (
          <Marker
            key = {index}
            icon={require("../assets/seenpinkek.svg")}
            position={{ lat: element.latitude, lng: element.longitude }}
            onClick={() => this.changeClickedIndex(index)}
          />
        ))}
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          isMarkerShown
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
          disableDefaultUI={true}
        />
      <Infos indexke = {this.state.clickedIndex} tomb = {this.state.users}/>
        </div>
    );
  }
}

export default Map;
