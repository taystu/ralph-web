import React, { Component } from 'react';
import Navigation from './Navigation';

import { Row, Col, Button} from 'react-bootstrap';
var ScrollButton = require('../components/ScrollButton');
export default class Booking extends Component{
	constructor(props){
		super(props);
	}

	render() {



		if(this.props.startDate && this.props.endDate){
			return (
				<div className="container" style={{marginTop: '100px', marginBottom: '100px'}}>
					<Col sm={12} md={2} lg={2}>
						<h4>Booking Info</h4>
					</Col>
					<Col md={10}>
						<Row>
							<Col md={12}>
								<p>Start Date: {this.props.startDate.format('LL')}</p>
								<p>End Date: {this.props.endDate.format('LL')}</p>
							</Col>
						</Row>
					</Col>
				</div>
			);
		} else {
			return (
				<div className="container" style={{marginTop: '100px', marginBottom: '100px'}}>
					<Col sm={12} md={2} lg={2}>
						<h4>Booking Info</h4>
					</Col>
					<Col md={10}>
						<Row>
							<Col md={12}>
								<ScrollButton to="home" spy={true} smooth={true} duration={500}>here</ScrollButton>
							</Col>
						</Row>
					</Col>
				</div>
			)
		}
	}
}
