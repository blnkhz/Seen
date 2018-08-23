import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";


class Map extends Component {
  state = { users: [], zoomka: 13, centerke:{lat:47.507589, lng:19.066128}};
  
  onClick(data, latika, longika){
    this.props.onClick(data);
    this.setState({centerke:{lat:latika, lng:longika}});
    this.setState({zoomka: 15});
  };

  shouldComponentUpdate(nextProps) {
    return (this.props.users !== nextProps.users);
}
  
  render() {
  const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 47.507589, lng: 19.066128 }}
        defaultZoom={13}
        center={this.state.centerke}
        zoom={this.state.zoomka}
        defaultOptions={{
          streetViewControl: true,
          scaleControl: false,
          mapTypeControl: false,
          panControl: true,
          zoomControl: true,
          rotateControl: true,
          fullscreenControl: true,
          minZoom: 3,
          styles: maplayout
        }}
      >
        {this.props.users.map((element, kulcs) => (
          <Marker
            key = {kulcs}
            icon={require("../assets/pin2.svg")}
            position={{ lat: element.latitude, lng: element.longitude }}
            onClick={() => this.onClick(kulcs, element.latitude, element.longitude)}
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
