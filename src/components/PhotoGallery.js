import React, { Component } from 'react';

import {Grid, Row, Col, Image, Modal, Carousel, CarouselItem, Button} from 'react-bootstrap';

import BeachGallery from './BeachGallery';

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

		return (
			<div className="container" style={{marginTop: '150px'}}>
		    <Row>
		      <Col xs={2} md={2} lg={2}>
		      	<h4>Area Photos</h4>
		      </Col>
		      <Col md={10}>
		      	<Button bsStyle="primary" onClick={()=>this.setState({ beachShow: true })}>Beach Photos</Button>
		      	<BeachGallery show={this.state.beachShow} onHide={beachClose}/>
		      </Col>
		    </Row>
			</div>
		);
	}
}
