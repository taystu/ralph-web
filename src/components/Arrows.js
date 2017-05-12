import React, { Component } from 'react';

class PrevArrow extends Component {
	render() {
		return (
			<i className="fa fa-chevron-left" aria-hidden="true"></i>
		);
	}
}

class NextArrow extends Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<button>
				<i class="material-icons">&#xE315;</i>
			</button>
		);
	}
}


export { PrevArrow,  NextArrow };
const NextArrow = (props) => {
	const { className, style, onClick } = props
	return (
		<Button>
			<i onClick={onClick} className="slick-arrow slick-next fa fa-3x fa-chevron-right" aria-hidden="true"></i>
		</Button>
	)