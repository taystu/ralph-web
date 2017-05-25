import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import omit from 'lodash.omit';
import momentPropTypes from 'react-moment-proptypes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

var Scroll  = require('react-scroll');
import ScrollButton from './ScrollButton';
var Element = Scroll.Element;
var Waypoint = require('react-waypoint');

import { Button } from 'react-bootstrap';



// react-dates
import 'react-dates/lib/css/_datepicker.css';
import '../style/CustomDateStyle.scss';
import { DateRangePicker } from 'react-dates'; 
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '../helpers/constants';


// global fonts
import '../style/global.scss';

import Navigation from './Navigation';

import DatePickerWrapper from './DatePickerWrapper';

import JumbotronContainer from './JumbotronContainer2';

import IntroContainer from './IntroContainer';

import Location from './Location';

import PhotoGallery from './PhotoGallery';

import Booking from './Booking';

injectTapEventPlugin();


const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,

  ...omit([
    'startDate',
    'endDate',
    'onDatesChange',
    'focusedInput',
    'onFocusChange'
  ]),
};


export default class App extends Component {
	constructor(props){
		super(props);
		let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }
		this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
			highlightHome: false,
			highlightIntro: false,
			highlightLocation: false,
			highlightPhoto: false
		}

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
	}


	onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
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



	render() {
		const { focusedInput, startDate, endDate } = this.state;

	    // autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
	    // example wrapper but are not props on the SingleDatePicker itself and
	    // thus, have to be omitted.
	    const props = omit(this.props, [
	      'autoFocus',
	      'autoFocusEndDate',
	      'initialStartDate',
	      'initialEndDate',
	  ]);
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

					/>
					<div className="container calendar">
		        <DateRangePicker
		          withPortal={true}
		          onDatesChange={this.onDatesChange}
		          onFocusChange={this.onFocusChange}
		          focusedInput={focusedInput}
		          startDate={startDate}
		          endDate={endDate}
		          numberOfMonths={1}
		          minimumNights={3}
		          showDefaultInputIcon
		          enableOutsideDays
		          showClearDates
		        />
		        <Button 
		        	bsStyle="info" 
		        	className="book-button">
		        	<ScrollButton
		        		to="booking" 
		        		spy={true} 
		        		smooth={true} 
		        		duration={500}>Book Now
		        	</ScrollButton>
		        </Button>
	      	</div>

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
								<Booking startDate={this.state.startDate} endDate={this.state.endDate}/>
							</Element>
						</div>
				</div>
			</MuiThemeProvider>
		)
	}
}