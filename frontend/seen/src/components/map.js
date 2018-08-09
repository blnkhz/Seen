import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render(){
    const tomb = [{lat: 47.507589, lng: 19.066128}, {lat: 47.487000, lng: 19.066120}];
    const GoogleMapExample = withGoogleMap(props =>
        <GoogleMap 
        defaultCenter = { { lat: 47.507589, lng: 19.066128 } }
        defaultZoom = { 13 }
        >
        {tomb.map((element) => <Marker icon={require("../assets/seenpinkek.svg")} position={{ lat: element.lat, lng: element.lng }}/>)}
        </GoogleMap>
     );
    return(
        <div>
        <GoogleMapExample
          isMarkerShown
          containerElement={ <div className="mapCont" /> }
          mapElement={ <div className="map" /> }
          onMarkerClick={true}
        />
      </div>
    );
  }
};
export default Map;