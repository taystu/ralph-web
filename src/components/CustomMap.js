import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import mapstyle from '../helpers/mapstyle';

const MyMarker = () => {
  return (
    <i style={{color: 'red'}} className="fa fa-3x fa-map-marker" aria-hidden="true"></i>
  )
}


const API_KEY = "AIzaSyDfs7vs5c-cmPyXlbhX2k854fMxVDzPUrA";


export default class SimpleMap extends Component {



  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY
        }}
        options={{
          mapTypeControl:true,
          mapTypeId: 'satellite'
        }}
        center={{
          lat: 21.467505,
          lng: -71.146346
        }}
        defaultZoom={16}
      >
        <MyMarker
          lat={21.467505}
          lng={-71.146346}

        />
      </GoogleMapReact>
    );
  }
}