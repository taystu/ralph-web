import React, { Component } from 'react';

import 'react-dates/lib/css/_datepicker.css';


import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


export default class BookingInput extends Component {
	render() {
		return (
			<div>
<DateRangePickerWrapper initialStartDate={{_isAMomentObject: {true}, _isUTC: {false}, _pf: {{empty: {false}, unusedTokens: {[]}, unusedInput: {[]}, …}}, …}} initialEndDate={{_isAMomentObject: {true}, _isUTC: {false}, _pf: {{empty: {false}, unusedTokens: {[]}, unusedInput: {[]}, …}}, …}} showDefaultInputIcon />
			</div>
		);
	}
}




