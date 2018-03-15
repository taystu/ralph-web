import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../helpers/mapStyles';

import GooglePlaces from './GooglePlaces';
const MyMarker = () => {
  return (
    <i style={{color: 'red'}} className="fa fa-3x fa-map-marker" aria-hidden="true"></i>
  )
}

const RestaurantMarker = () => {
  return (
    <i style={{color: 'black'}} className="fa fa-3x fa-cutlery" aria-hidden="true"></i>
  )
}


const API_KEY = "AIzaSyDfs7vs5c-cmPyXlbhX2k854fMxVDzPUrA";
const mapOptions = {
  styles: mapStyles
}


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
        }}
        center={{
          lat: 21.467505,
          lng: -71.146346
        }}
        options={mapOptions}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        >
        <MyMarker
          lat={21.467505}
          lng={-71.146346}
        />
{/*         <RestaurantMarker
          lat={21.467505}
          lng={-71.146346}
        /> */}
{/*        <GooglePlaces map={this.state.map} />
*/}
      </GoogleMapReact>
    );
  }
}