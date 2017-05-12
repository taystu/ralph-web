import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

var Scroll  = require('react-scroll');
var Element = Scroll.Element;
var Waypoint = require('react-waypoint');

// global fonts
import '../style/global.scss';

import Navigation from './Navigation';

import JumbotronContainer from './JumbotronContainer';

import IntroContainer from './IntroContainer';

injectTapEventPlugin();

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			highlightHome: false,
			highlightIntro: false,
			highlightLocation: false
		}
	}




	homeEnter() {
		console.log('homenter');
		this.setState({
			highlightHome: true
		})
	}

	homeLeave() {
		console.log('home leave');
		this.setState({
			highlightHome: false,
		})
	}


	introEnter() {
		console.log('introenter');
		this.setState({
			highlightIntro: true
		})
	}

	introLeave() {
		console.log('introleave')
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
								/>
							</Element>
						</div>
					</Waypoint>

					{/*Intro*/}

					<JumbotronContainer/>

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
				</div>
			</MuiThemeProvider>
		)
	}
}