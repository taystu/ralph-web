import React, { Component } from 'react';
var Scroll = require('react-scroll');
var Helpers = Scroll.Helpers;

module.exports = Helpers.Element(Element);


class ScrollButton extends Component {


	render() {
		return (
			<div {...this.props} >
				{this.props.children}
			</div>
		);
	}
}

module.exports = Helpers.Scroll(ScrollButton);