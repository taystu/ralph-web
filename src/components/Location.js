import React, { Component } from 'react';

import {Row, Col} from 'react-bootstrap';

import CustomMap from './CustomMap';


export default class Location extends Component {
	render() {
		return (
			<div className="container" style={{marginTop: '100px'}}>
 				<Row >
 					<Col xs={2} sm={2} md={2} lg={2}>
 						<h4>Area</h4>
 					</Col>
 					<Col style={{marginTop: '8px'}}xs={10} sm={10} md={10} lg={10}>
 						<Row>
 							<Col style={{height: '300px'}} md={12}>
 								<div className="space-divs">Located less than 100 yards 
 								from the grocery store with the largest selection on the
 								island and 300 yards in the opposite direction, the nicest
 								restaurant on the whole island at Bohio resort.</div>
 								<div className="space-divs hidden-xs hidden-sm">
								Bohio is also where you can rent a Hobie Cat, paddleboards, 
								kayaks, and extra bicycles. They also have snorkel trips, 
								scuba trips, and whale watching excursions. All of it just 
								a short walk down the beach just north of our bungalow. At 
								night we will get dressed, walk down the beach to Bohio, 
								take sunset pictures, have a fantastic chef prepared meal, 
								and then walk back to our quiet little bungalow under the stars.
								</div>
 								<CustomMap />
 								<hr/>
 							</Col>
 						</Row>
 						<hr/>
 					</Col>
 				</Row>
			</div>
		);
	}
}
