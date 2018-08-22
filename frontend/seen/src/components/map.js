import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";


class Map extends Component {
  state = { users: [], data2: 1, zoomka: 13, centerke:{lat:47.507589, lng:19.066128}};
  
  onClick(data, latika, longika){
    this.setState({data2: data});
    this.props.onClick(data);
    this.setState({centerke:{lat:latika, lng:longika}});
    this.setState({zoomka: 15});
  };

  
  render() {
    console.log(this.props.users[this.state.data2])
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
