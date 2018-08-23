import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";
import update from "react-addons-update";
import PostForm from "./notstolencode.js";

class AddMap extends Component {
  state = {
    marker: {
      position: {
        lat: null,
        lng: null
      },
      draggable: true,
      key: "Greenfoxok",
      defaultAnimation: 2
    },
    centerke: { lat: 47.507589, lng: 19.066128 },
    savedPos: { lat: null, lng: null }
  };

  handleMapClick(event) {
    var { marker } = this.state;
    marker = update(marker, {
      $set: {
        position: event.latLng,
        draggable: true,
        defaultAnimation: 2,
        key: Date.now()
      }
    });
    this.setState({ marker });
    this.setState({ centerke: event.latLng });
    console.log(event.latLng.toString());
    this.setState({
      savedPos: {
        lat: parseFloat(parseFloat(event.latLng.toString().substr(1))),
        lng: parseFloat(parseFloat(event.latLng.toString().substr(20)))
      }
    });
    console.log(this.state.savedPos);
  }

  handleMarkerRightclick() {
    var { marker } = this.state;
    marker = update(marker, {
      $set: {
        position: null,
        draggable: true,
        defaultAnimation: 2,
        key: Date.now()
      }
    });
    this.setState({ marker });
  }
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 47.507589, lng: 19.066128 }}
        zoom={13}
        center={this.state.centerke}
        onClick={e => this.handleMapClick(e)}
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
        <Marker
          onRightClick={() => this.handleMarkerRightclick()}
          icon={require("../assets/pin2.svg")}
          {...this.state.marker}
        />
      </GoogleMap>
    ));
    return (
      <div className="flexdaddy">
        <PostForm savedPos={this.state.savedPos} classname="formchild" />
        <GoogleMapExample
          savedPos={this.state.savedPos}
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
        />
      </div>
    );
  }
}
export default AddMap;
