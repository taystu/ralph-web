import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import GooglePlaces from './GooglePlaces';
const MyMarker = () => {
  return (
    <i style={{color: 'red'}} className="fa fa-3x fa-map-marker" aria-hidden="true"></i>
  )
}


const API_KEY = "AIzaSyDfs7vs5c-cmPyXlbhX2k854fMxVDzPUrA";


export default class SimpleMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      map: ''
    }
  }


  render() {
    return (
      <GoogleMapReact
        onGoogleApiLoaded={({map, maps}) => this.setState({map: map})}
        bootstrapURLKeys={{
          key: API_KEY,
          libaries: "places"
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
        yesIWantToUseGoogleMapApiInternals
        >
        <MyMarker
          lat={21.467505}
          lng={-71.146346}
        />
{/*        <GooglePlaces map={this.state.map} />
*/}
      </GoogleMapReact>
    );
  }
}