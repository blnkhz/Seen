import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";
import update from "react-addons-update";
import PostForm from "./notstolencode.js";
import Sidebar from "react-sidebar";

const GoogleMapExample = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 47.507589, lng: 19.066128 }}
    defaultZoom={13}
    onClick={e => props.onMapClick(e)}
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
    <Marker
      onClick={open => props.onMarker(open)}
      onRightClick={() => props.onMapRightClick()}
      icon={require("../assets/pin1.svg")}
      {...props.marker}
    />
  </GoogleMap>
));

class AddMap extends Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false,
      marker: {
        position: {
          lat: null,
          lng: null
        },
        draggable: true,
        key: "Greenfoxok",
        defaultAnimation: 2
      },
      savedPos: { lat: null, lng: null }
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  handleMapClick(event) {
    var { marker } = this.state;
    marker = update(marker, {
      $set: {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now()
      }
    });
    this.setState({ marker });
    this.setState({ centerke: event.latLng });
    this.setState({
      savedPos: {
        lat: parseFloat(parseFloat(event.latLng.toString().substr(1))),
        lng: parseFloat(parseFloat(event.latLng.toString().substr(20)))
      }
    });
    this.onSetSidebarOpen(true);
  }

  handleMarkerRightclick() {
    var { marker } = this.state;
    marker = update(marker, {
      $set: {
        position: null,
        defaultAnimation: 2,
        key: Date.now()
      }
    });
    this.setState({ marker });
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onSetSidebarClose = () => {
    this.setState({ sidebarOpen: false });
  };

  onMarkerClick(open) {
    this.setState(this.onSetSidebarOpen(open));
  }

  render() {
    return (
      <div className="flexmommy">
        <Sidebar
          sidebar={
            <div>
              <button
                onClick={this.onSetSidebarClose}
                className="addsighting-closebutton"
              >
                →
              </button>
              <PostForm
                FbId={this.props.FbId}
                picture={this.props.picture}
                savedPos={this.state.savedPos}
                className="formchild"
              />
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          className="formchild"
          pullRight="true"
        />
        <GoogleMapExample
          onMarker={open => this.onMarkerClick(open)}
          onMapClick={e => this.handleMapClick(e)}
          onMapRightClick={() => this.handleMarkerRightclick()}
          marker={this.state.marker}
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
        />
      </div>
    );
  }
}
export default AddMap;
