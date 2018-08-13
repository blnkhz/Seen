import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

class Map extends Component {
  state = {users: []}
  
  componentDidMount = () => {
    fetch('http://localhost:52210/beenseen', { mode: 'cors' })
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }
  render(){
    const GoogleMapExample = withGoogleMap(props =>
        <GoogleMap 
        defaultCenter = { { lat: 47.507589, lng: 19.066128 } }
        defaultZoom = { 13 }
        >
        {this.state.users.map((element) => <Marker icon={require("../assets/seenpinkek.svg")} position={{ lat: element.latitude, lng: element.longitude }}/>)}
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