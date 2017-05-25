import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import omit from 'lodash.omit';
import momentPropTypes from 'react-moment-proptypes';

import ScrollButton from './ScrollButton';
import { Button } from 'react-bootstrap';

import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates'; 
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION, ANCHOR_LEFT } from '../helpers/constants';


import '../style/CustomDateStyle.scss';


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




export default class DatePickerWrapper extends Component {
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
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
	}

	onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

	render() {
			console.log(this.state);
	    const { focusedInput, startDate, endDate } = this.state;

	    // autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
	    // example wrapper but are not props on the SingleDatePicker itself and
	    // thus, have to be omitted.
	    const props = omit(this.props, [
	      'autoFocus',
	      'autoFocusEndDate',
	      'initialStartDate',
	      'initialEndDate',
	      'returnDates'
	    ]);
	    return (
	      <div style={{width: '75%'}} className="container">
	        <DateRangePicker
	          {...props}
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
	    );
	  }
}
