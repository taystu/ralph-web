import React, { Component } from 'react';
import Slider from 'react-slick';

import { Jumbotron, Button } from 'react-bootstrap';


var Scroll = require('react-scroll');



import '../style/JumbotronContainer.scss';



const PrevArrow = (props) => {
	const { className, onClick } = props
	return (
			<i 
				onClick={onClick} 
				className="prev-arrow fa fa-3x fa-chevron-circle-left" 
				aria-hidden="true"></i>
	)
}

const NextArrow = (props) => {
	const { className, onClick } = props
	return (
			<i 
				onClick={onClick} 
				className="next-arrow fa fa-3x fa-chevron-circle-right" 
				aria-hidden="true"></i>
	)
}

const DownArrow = (props) => {
	return (
			<i 
				onClick={props.scrollDown}
				className="down-arrow fa fa-3x fa-chevron-circle-down" 
				aria-hidden="true"></i>
	)
}



export default class JumbotronContainer extends Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}

	scrollDown() {
		console.log('hello');
	}


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: 'custom-dots',
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };
    return (
    	<div>
	      <Slider {...settings} >
			    <Jumbotron className="home-jumbotron">
			    </Jumbotron>
			    <Jumbotron className="home-jumbotron2">
			    </Jumbotron>
			    <Jumbotron className="home-jumbotron">
			    </Jumbotron>
	      </Slider>
	      {/*<DownArrow scrollDown={this.scrollDown}/>*/}
      </div>
    );
  }
}