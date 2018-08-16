'use strict'

import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

class Map extends Component {
  state = { users: [] };

  componentDidMount = () => {
    fetch("http://localhost:52210/beenseen", { mode: "cors" })
      .then(res => res.json())
      .then(users => this.setState({ users }));
  };
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
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#444444"
                },
                {
                  lightness: "-50"
                }
              ]
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [
                {
                  color: "#f2f2f2"
                }
              ]
            },
            {
              featureType: "landscape",
              elementType: "labels.text.fill",
              stylers: [
                {
                  lightness: "-80"
                }
              ]
            },
            {
              featureType: "landscape",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  lightness: "0"
                }
              ]
            },
            {
              featureType: "landscape.natural",
              elementType: "labels.text.fill",
              stylers: [
                {
                  lightness: "-71"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  saturation: "-100"
                },
                {
                  lightness: "-30"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  hue: "#00a2ff"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [
                {
                  saturation: -100
                },
                {
                  lightness: 45
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  lightness: "-50"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [
                {
                  visibility: "simplified"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  color: "#ebb5c9"
                },
                {
                  visibility: "on"
                }
              ]
            }
          ]
        }}
      >
        {this.state.users.map(element => (
          <Marker
            icon={require("../assets/seenpinkek.svg")}
            position={{ lat: element.latitude, lng: element.longitude }}
          />
        ))}
      </GoogleMap>
    ));
    return (
      <GoogleMapExample
        isMarkerShown
        containerElement={<div className="mapCont" />}
        mapElement={<div className="map" />}
        onMarkerClick={true}
        disableDefaultUI={true}
      />
    );
  }
}

export default Map;
