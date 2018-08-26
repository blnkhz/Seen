import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import maplayout from "./mapstyle.js";
import update from "react-addons-update";
import PostForm from "./addform.js";
import Modal from "react-modal";

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
      minZoom: 3,
      styles: maplayout
    }}
  >
    <Marker
      onRightClick={() => props.onMapRightClick()}
      icon={require("../assets/pin2.svg")}
      {...props.marker}
    />
  </GoogleMap>
));

class AddMap extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
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
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="flexdaddy">
        {/* <PostForm savedPos={this.state.savedPos} classname="formchild" /> */}
        <GoogleMapExample
          onMapClick={e => this.handleMapClick(e)}
          onMapClick={this.handleOpenModal}
          onMapRightClick={() => this.handleMarkerRightclick()}
          marker={this.state.marker}
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
          style={{width: this.state.showModal ? '75%' : '100%'}}
          classname="mapchild"
          />
        <Modal
          isOpen={this.state.showModal}
          //   contentLabel="Minimal Modal Example"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
          className="modalka"
        >
          <PostForm savedPos={this.state.savedPos} classname="formchild" />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}
export default AddMap;
