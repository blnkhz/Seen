import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import Infos from './infobar.js';
import maplayout from "./mapstyle.js";


class Map extends Component {
  state = { users: [], hasRendered: false};
  
  onClick = (data) => {
    this.props.onClick(data);
    this.setState({hasRendered: true})
  };
  
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
        {this.props.users.map((element, index) => (
          <Marker
            key = {index}
            icon={require("../assets/seenpinkek.svg")}
            position={{ lat: element.latitude, lng: element.longitude }}
            onClick={() => this.onClick(index)}
          />
        ))}
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
          disableDefaultUI={true}
          isMarkerShown
          onClick={this.onClick}>
        </GoogleMapExample>
        </div>
    );
  }
}

export default Map;
