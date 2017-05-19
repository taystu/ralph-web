import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

var Scroll  = require('react-scroll');
var Element = Scroll.Element;
var Waypoint = require('react-waypoint');

// global fonts
import '../style/global.scss';

import Navigation from './Navigation';

import JumbotronContainer from './JumbotronContainer2';

import IntroContainer from './IntroContainer';

import Location from './Location';

import PhotoGallery from './PhotoGallery';

import Booking from './Booking';

injectTapEventPlugin();

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			highlightHome: false,
			highlightIntro: false,
			highlightLocation: false,
			highlightPhoto: false,
			startDate: null,
			endDate: null
		}
	}




	homeEnter() {
		this.setState({
			highlightHome: true
		})
	}

	homeLeave() {
		this.setState({
			highlightHome: false,
		})
	}


	introEnter() {
		this.setState({
			highlightIntro: true
		})
	}

	introLeave() {
		
		this.setState({
			highlightIntro: false
		})
	}


	locationEnter() {
		this.setState({
			highlightLocation: true
		})
	}

	locationLeave() {
		this.setState({
			highlightLocation: false
		})
	}

	photoEnter() {
		this.setState({
			highlightPhoto: true
		})
	}
	photoLeave() {
		this.setState({
			highlightPhoto: false
		})
	}

	updateDates() {
		this.setState({
			startDate: this.state.startDate,
			endDate: this.state.endDate
		})
	}


	render() {
		return (
			<MuiThemeProvider >
				<div className="app-container">
				{/*Jumbo*/}
					<Waypoint
						onEnter={this.homeEnter.bind(this)}
						onLeave={this.homeLeave.bind(this)}
					>
						<div>
							<Element name="home">
								<Navigation
									highlightHome={this.state.highlightHome} 
									highlightIntro={this.state.highlightIntro} 
									highlightLocation={this.state.highlightLocation}
									highlightPhoto={this.state.highlightPhoto}
								/>
							</Element>
						</div>
					</Waypoint>

					{/*Intro*/}

					<JumbotronContainer
						updateDates={this.updateDates}
					/>


					<Waypoint
						onEnter={this.introEnter.bind(this)}
						onLeave={this.introLeave.bind(this)}
					>
						<div>
							<Element name="intro">
								<IntroContainer/>
							</Element>
						</div>
					</Waypoint>
					<Waypoint
						onEnter={this.locationEnter.bind(this)}
						onLeave={this.locationLeave.bind(this)}
					>
						<div>
							<Element name="location">
								<Location/>
							</Element>
						</div>
					</Waypoint>
					<Waypoint
						onEnter={this.photoEnter.bind(this)}
						onLeave={this.photoLeave.bind(this)}
					>
						<div>
							<Element name="photos">
								<PhotoGallery/>
							</Element>
						</div>
					</Waypoint>
						<div>
							<Element name="booking">
								<Booking startDate={this.state.startDate} endDate={this.state.endDate} />
							</Element>
						</div>
				</div>
			</MuiThemeProvider>
		)
	}
}