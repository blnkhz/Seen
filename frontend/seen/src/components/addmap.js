import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import maplayout from "./mapstyle.js";

class AddMap extends Component {
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
          minZoom: 3,
          styles: maplayout
        }}
      />
    ));
    return (
      <div className="mapchild">
        <GoogleMapExample
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
        />
      </div>
    );
  }
}
export default AddMap;
