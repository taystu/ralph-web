import React, { Component } from 'react';

import Navigation from './Navigation';



export default class Booking extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div style={{marginTop: '150px'}} className="container">
					<h3>Make Booking Here</h3>
				</div>
			</div>
		);
	}
}
