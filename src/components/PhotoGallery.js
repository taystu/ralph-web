import React, { Component } from 'react';

import {Grid, Row, Col, Image, Modal, Button, Thumbnail} from 'react-bootstrap';

import BeachGallery from './BeachGallery';
import SnorkelingGallery from './SnorkelingGallery';
import RestaurantGallery from './RestaurantGallery';

import '../style/PhotoGallery.scss';

export default class PhotoGallery extends Component {
	constructor(props){
		super(props);
		this.state = {
			beachShow: false,
			snorkelingShow: false,
			restaurantsShow: false
		}
	}


	render() {
		let beachClose = () => this.setState({beachShow:false})
		let snorkelClose = () => this.setState({snorkelingShow:false})
		let restaurantClose = () => this.setState({restaurantsShow:false})

		return (
			<div className="container" style={{marginTop: '200px'}}>
		    <Row>
		      <Col sm={12} md={2} lg={2}>
		      	<h4>Area Photos</h4>
		      </Col>
		      <Col md={10}>
		      	<Row>
		      		<Col sm={6} md={4} lg={4}>
		      			<Thumbnail style={{position: 'relative'}} src={require('../images/beach1.jpg')} onClick={()=>this.setState({ beachShow: true })} >
		      				<h2 style={{position: 'absolute', top: '20%', left: '5%', cursor: 'pointer', color: 'white'}}>The Beach</h2>
		      			</Thumbnail>
		      		</Col>
		      		<Col sm={6} md={4} lg={4}>
		      			<Thumbnail style={{position: 'relative'}} src={require('../images/snorkel1.jpg')} onClick={()=>this.setState({ snorkelingShow: true })} >
		      				<h2 style={{position: 'absolute', top: '20%', left: '5%', cursor: 'pointer', color: 'white'}}>The Snorkelling</h2>
		      			</Thumbnail>
		      		</Col>
		      		<Col sm={6} md={4} lg={4}>
		      			<Thumbnail style={{position: 'relative'}} src={require('../images/restaurant1.jpg')} onClick={()=>this.setState({ restaurantsShow: true })} >
		      				<h2 style={{position: 'absolute', top: '20%', left: '5%', cursor: 'pointer', color: 'white'}}>The Food</h2>
		      			</Thumbnail>
		      		</Col>
				      	<BeachGallery show={this.state.beachShow} onHide={beachClose}/>
				      	<SnorkelingGallery show={this.state.snorkelingShow} onHide={snorkelClose}/>
				      	<RestaurantGallery show={this.state.restaurantsShow} onHide={restaurantClose}/>
		      	</Row>
		      </Col>
		    </Row>
			</div>
		);
	}
}
