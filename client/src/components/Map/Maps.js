import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '90%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -0.2884,
         lng: 36.8233
        }}
      />
    );
   
  }
}

export default GoogleApiWrapper(
  (props) =>({apiKey: props.apiKey})
)(MapContainer);
