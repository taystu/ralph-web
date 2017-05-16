import React, { Component } from 'react';

import { PageHeader, Col, Row, Breadcrumb} from 'react-bootstrap';

import '../style/IntroContainer.scss';

export default class IntroContainer extends Component {
	render() {
		return (
			<div className="container" style={{marginTop: '-39px', marginBottom: '-50px'}}>
				<PageHeader>
					<bold>Salty Cottage </bold><small> <h4 style={{color: 'rgba(0,0,0,0.5)'}}>Grand Turk, Turks and Caicos, Caribbean</h4></small>
				</PageHeader>
 				<p>There is still one place in the world where you can stroll
 				down a deserted beach hand-in-hand with your loved one, and be the only 
 				souls on the sand. There is still one tiny, Caribbean destination where 
 				you can turn off the world, relax completely, and recharge totally.
 				</p>
 				<p>The place is Grand Turk. The destination is Pillory Beach. And the oceanfront 
 				paradise is Beachside Bungalow.Grand Turk is the Caribbean that few tourists will 
 				ever see – a place of few distractions and even fewer crowds.</p>
 				<hr/>
 				<Row className="icon-row">
 				 	<Col xs={3} sm={3} md={3} lg={3} className="text-center">
 				 		<i style={{color: 'rgb(199, 195, 199)'}} className="fa fa-2x fa-home" aria-hidden="true"></i>
 				 		<p style={{color: 'rgb(199,195,199)'}} >Entire home</p>
 				 	</Col>
 				 	<Col xs={3} sm={3} md={3} lg={3} className="text-center">
 				 		<i style={{color: 'rgb(199, 195, 199)'}} className="fa fa-2x fa-users" aria-hidden="true"></i>
 				 		<p style={{color: 'rgb(199,195,199)'}} >5 Guests</p>
 				 	</Col>
 				 	<Col xs={3} sm={3} md={3} lg={3} className="text-center">
 				 		<img  src={require("../images/door.png")} alt=""/>
 				 		<p style={{color: 'rgb(199,195,199)'}} >3 Bedrooms</p>
 				 	</Col>
 				 	<Col xs={3} sm={3} md={3} lg={3} className="text-center">
 				 		<i style={{color: 'rgb(199, 195, 199)'}} className="fa fa-2x fa-bed" aria-hidden="true"></i>
 				 		<p style={{color: 'rgb(199,195,199)'}} >4 Beds</p>
 				 	</Col>
 				</Row>
 				<hr/>
 				<Row>
 					<Col xs={12} sm={2} md={2} lg={2}>
 						<h4>The Space</h4>
 					</Col>
 					<Col xs={12} sm={10} md={10} lg={10}>
 						<Row>
 							<Col style={{marginTop: '8px'}} xs={6} sm={6} md={6}>
 								<div className="space-divs">Accomodates: <strong>5</strong></div>
 								<div className="space-divs">Bathrooms: <strong>2</strong></div>
 								<div className="space-divs">Bedrooms: <strong>4</strong></div>
 							</Col>
 							<Col xs={6} sm={6} md={6}>
 								<div className="space-divs">Beds: <strong>5</strong></div>
 								<div className="space-divs">Property Type: <strong>2</strong></div>
 							</Col>
 						</Row>
 						<hr/>
 					</Col>
 				</Row>
 				<Row>
 					<Col xs={12} sm={2} md={2} lg={2}>
 						<h4>Ameneties</h4>
 					</Col>
 					<Col xs={12} sm={10} md={10} lg={10}>
 						<Row>
 							<Col style={{marginTop: '8px'}} xs={6} sm={6} md={6}>
 								<div className="space-divs">Kitchen</div>
 								<div className="space-divs">Internet</div>
 								<div className="space-divs">TV</div>
 								<div className="space-divs">Air conditioning</div>
 							</Col>
 							<Col xs={6} sm={6} md={6}>
 								<div className="space-divs">Free parking</div>
 								<div className="space-divs">Private entrance</div>
 								<div className="space-divs">Family friendly</div>
 								<div className="space-divs">Pets allowed</div>
 							</Col>
 						</Row>
 						<hr/>
 					</Col>
 				</Row>
			</div>
		);
	}
}
