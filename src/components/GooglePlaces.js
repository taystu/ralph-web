import React, { Component } from 'react';

export default class GooglePlaces extends Component {
	

	constructor(props){
		super(props);
		this.state = {
			restaurants: []
		}
	}

/*	createMarker(place) {
	  var placeLoc = place.geometry.location;
	  var marker = new google.maps.Marker({
	    map: {this.props.map}
	    position: place.geometry.location
	  });
	}

	callback(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
	}

	componentWillRecieveProps(props){
		const { options } = props;
		if(!options.input){
			this.setState({
				restaurants: []
			})
			return false;
		}
    const service = new google.maps.places.PlacesService(map);
    	service.nearbySearch ({
          location: pyrmont,
          radius: 500,
          type: ['restaurants']
    	}, callback);
    }*/


	render() {
		return (
			<div>I am places</div>
		)
	}
}