import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import Infos from './infobar.js';
import maplayout from "./mapstyle.js";

var suti = null;
var changeClick = (id) => {
  suti = id;
}

const GoogleMapExample = withGoogleMap(props => {
  const kex = props.kex;
  var sanyi = props.sanyi;

  return(
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
    {kex.map((element, index) => (
      <Marker
        key = {index}
        icon={require("../assets/seenpinkek.svg")}
        position={{ lat: element.latitude, lng: element.longitude }}
        onClick={() => changeClick(index) & console.log(suti)}
      />
    ))}
  </GoogleMap>
)});

class Map extends Component {
  state = { users: [], clickedIndex: null };
  
  componentDidMount = () => {
    fetch("http://localhost:52210/beenseen", { mode: "cors" })
    .then(res => res.json())
    .then(users => this.setState({ users }));
  };
  
  render() {
    console.log(this.state.clickedIndex)
    return (
      <div>
        <GoogleMapExample
          kex = {this.state.users}
          clickedIndex = {suti}
          containerElement={<div className="mapCont" />}
          mapElement={<div className="map" />}
          disableDefaultUI={true}
          isMarkerShown
          
        >
        </GoogleMapExample>
      <Infos indexke = {suti} tomb = {this.state.users}/>
      {console.log(suti)}
        </div>
    );
  }
}

export default Map;
