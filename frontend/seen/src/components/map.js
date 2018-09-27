import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";

const GoogleMapExample = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 47.507589, lng: 19.066128 }}
    defaultZoom={13}
    center={props.centerke}
    zoom={props.zoomka}
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
    {props.users.map((element, kulcs) => (
      <Marker
        key={kulcs}
        defaultAnimation="2"
        icon={require("../assets/pin2.svg")}
        onMouseOver={() =>
          props.mouseOver() &&
          props.boxPos(kulcs, element.latitude, element.longitude)
        }
        onMouseOut={props.mouseExit}
        position={{ lat: element.latitude, lng: element.longitude }}
        onClick={() => props.setKeksz(kulcs)}
      />
    ))}
  </GoogleMap>
));

class Map extends Component {
  state = {
    users: [],
    zoomka: 13,
    centerke: { lat: 47.507589, lng: 19.066128 },
    showInfoWindow: false,
    indkeksz: 0
  };

  handleMouseOver = e => {
    this.setState({
      showInfoWindow: true
    });
  };
  
  handleMouseExit = e => {
    this.setState({
      showInfoWindow: false
    });
  };

  setIndkeksz = data => {
    this.setState({ indkeksz: data });
    this.props.setKeksz(data);
  };

  render() {
    return (
      <div>
        <GoogleMapExample
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
          disableDefaultUI={true}
          isMarkerShown
          onClick={this.setIndkeksz}
          centerke={this.state.centerke}
          zoomka={this.state.zoomka}
          users={this.props.users}
          showInfoWindow={this.state.showInfoWindow}
          mouseOver={this.handleMouseOver}
          mouseExit={this.handleMouseExit}
          click={this.handleClick}
          setKeksz={this.setIndkeksz}
          indo={this.state.indkeksz}
          boxPos={this.getBoxPos}
          boxPosValue={this.state.centerke}
        />
      </div>
    );
  }
}

export default Map;
