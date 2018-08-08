import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  render(){
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap 
          defaultCenter = { { lat: 47.507589, lng: 19.066128 } }
          defaultZoom = { 13 }
        >
        </GoogleMap>
     ));
    return(
        <div>
        <GoogleMapExample
          containerElement={ <div className="mapCont" /> }
          mapElement={ <div className="map" /> }
        />
      </div>
    );
  }
};
export default Map;