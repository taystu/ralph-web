import React, { Component } from 'react';
import Navigation from './Navigation';

import { Row, Col, Button, FormGroup, ControlLabel, HelpBlock, FormControl} from 'react-bootstrap';
var ScrollButton = require('../components/ScrollButton');


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}



export default class Booking extends Component {
	constructor(props){
		super(props);
		this.state = {
			FNAME: '',
			LNAME: '',
			EMAIL: '',
			GUESTS: '',
			STARTDATE: '',
			ENDDATE: ''
		}
	}

	handleFirstNameChange(e){
		this.setState({
			FNAME: e.target.value
		})
	}
	handleLastNameChange(e){
		this.setState({
			LNAME: e.target.value
		})
	}

	handleEmailChange(e){
		this.setState({
			EMAIL: e.target.value
		})
	}

	handleGuestsChange(e){
		this.setState({
			GUESTS: e.target.value
		})
	}

	handleStartDate(e){
		this.setState({
			STARTDATE: e.target.value
		})
	}

	handleEndDate(e){
		this.setState({
			ENDDATE: e.target.value
		})
	}



	render() {
		if(this.props.startDate && this.props.endDate){
			return (
				<div className="container" style={{marginTop: '100px', marginBottom: '100px'}}>
					<Col sm={12} md={2} lg={2}>
						<h4>Booking Info</h4>
					</Col>
					<Col md={10} style={{marginTop: '8px'}}>
						<Row>
							<Col md={12}>
								<form action="//linkedin.us15.list-manage.com/subscribe/post" method="POST">
									<FieldGroup 
										type="hidden"
										name="u"
										value="f24e20f1d77d1f1486229de9f"

									/>
									<FieldGroup 
										type="hidden"
										name="id"
										value="128599583f"
									/>
									<FormGroup controlId="FNAME" validationState={this.state.FNAME.length >=1 ? "success" : "error"}>
										<ControlLabel>First Name</ControlLabel>
										<FormControl name="FNAME" type="text" value={this.state.FNAME} onChange={this.handleFirstNameChange.bind(this)} />
										{this.state.FNAME.length >= 1 ? " " : <HelpBlock>Required</HelpBlock>}
									</FormGroup>
									<FormGroup controlId="LNAME" validationState={this.state.LNAME.length >=1 ? "success" : "error"}>
										<ControlLabel>Last Name</ControlLabel>
										<FormControl name="LNAME" type="text" value={this.state.LNAME} onChange={this.handleLastNameChange.bind(this)} />
										{this.state.LNAME.length >= 1 ? " " : <HelpBlock>Required</HelpBlock>}
									</FormGroup>
									<FormGroup controlId="EMAIL" validationState={this.state.EMAIL.length >=1 ? "success" : "error"}>
										<ControlLabel>Email</ControlLabel>
										<FormControl name="EMAIL" type="text" value={this.state.EMAIL} onChange={this.handleEmailChange.bind(this)} />
										{this.state.EMAIL.length >= 1 ? " " : <HelpBlock>Required</HelpBlock>}
									</FormGroup>
									<FormGroup controlId="GUESTS" validationState={this.state.GUESTS.length >=1 ? "success" : "error"}>
										<ControlLabel>Number of Guests</ControlLabel>
										<FormControl name="GUESTS" type="text" value={this.state.GUESTS} onChange={this.handleGuestsChange.bind(this)} />
										{this.state.GUESTS.length >= 1 ? " " : <HelpBlock>Required</HelpBlock>}
									</FormGroup>
									<FormGroup controlId="STARTDATE">
										<ControlLabel>Start Date</ControlLabel>
										<FormControl name="STARTDATE" type="text" value={this.props.startDate.format('LL')} onChange={this.handleStartDate.bind(this)} />
									</FormGroup>
									<FormGroup controlId="ENDDATE">
										<ControlLabel>End Date</ControlLabel>
										<FormControl name="ENDDATE" type="text" value={this.props.endDate.format('LL')} onChange={this.handleEndDate.bind(this)} />
									</FormGroup>
							    <Button bsSize="large" bsStyle="info" type="submit" className="button" name="submit" value="Submit property review">
							      Submit Request
							    </Button>
								</form>
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
					<Col md={10} style={{marginTop: '8px'}}>
						<Row>
							<Col md={12}>
								<p>No booking dates selected select dates below. </p>
							</Col>
						</Row>
					</Col>
				</div>
			)
		}
	}
}
