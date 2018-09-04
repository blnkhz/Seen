import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";

class LoginMap extends Component {
  state = {
    users: [],
    zoomka: 12,
    centerke: { lat: 47.507589, lng: 19.066128 }
  };

  shouldComponentUpdate(nextProps) {
    return this.props.users !== nextProps.users;
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 47.507589, lng: 19.066128 }}
        defaultZoom={10}
        center={this.state.centerke}
        zoom={this.state.zoomka}
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: true,
          fullscreenControl: false,
          minZoom: 3,
          styles: maplayout
        }}
      >
        {this.props.users.map((element, kulcs) => (
          <Marker
            key={kulcs}
            defaultAnimation="2"
            icon={require("../assets/pin2.svg")}
            position={{ lat: element.latitude, lng: element.longitude }}
          />
        ))}
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div className="login-map-container" />}
          mapElement={<div className="login-map" />}
          disableDefaultUI={true}
          isMarkerShown
        />
      </div>
    );
  }
}

export default LoginMap;
