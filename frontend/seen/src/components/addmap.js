import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";
import update from "react-addons-update";

class AddMap extends Component {
  state = {
    markers: [{
      position: {
        lat: null,
        lng: null,
      },
      draggable: true,
      key: "Greenfoxok",
      defaultAnimation: 2
    }],
    centerke: { lat: 47.507589, lng: 19.066128 }
  }

  handleMapClick (event) {
    var {markers} = this.state;
    markers = update(markers, {
      $set: [
        {
          position: event.latLng,
          draggable: true,
          defaultAnimation: 2,
          key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
    this.setState({ centerke: event.latLng });
    console.log(this.state.markers[0].position.lat);
  }

  handleMarkerRightclick () {
    var {markers} = this.state;
    markers = update(markers, {
      $set: [
        {
          position: null,
          draggable: true,
          defaultAnimation: 2,
          key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
  }

  shouldComponentUpdate(nextState) {
    return (this.state.markers !== nextState.markers);
}
  

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 47.507589, lng: 19.066128 }}
        defaultZoom={13}
        center={this.state.centerke}
        onClick={(e) => this.handleMapClick(e)}
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
     {this.state.markers.map((marker) => {
              return (
                <Marker
                  onRightClick={()=> this.handleMarkerRightclick()}
                  icon={require("../assets/pin2.svg")}
                  {...marker}
                   />
              );
            })}
        ))}
      </GoogleMap>
    ));
    console.log(this.state.markers);
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
