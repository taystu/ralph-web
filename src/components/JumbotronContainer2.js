import React, { Component } from 'react';
import Slider from 'react-slick';

import { Jumbotron, Button, Carousel, CarouselItem } from 'react-bootstrap';

import '../style/JumbotronContainer2.scss';

import BookingInput from './BookingInput';


export default class JumbotronContainer extends Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}


  render() {

    return (
    	<div className="home-jumbotron" style={{textAlign: 'center'}}>
    		<h1 className="jumbotron-header">Salty Cottage Grand Turk</h1>
    		<Carousel>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <h3>Beach North</h3>
			        <p>description here.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <h3>Bathroom</h3>
			        <p>description here.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <h3>Outisde</h3>
			        <p>description here.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    		</Carousel>
            <BookingInput />
	      {/*<DownArrow scrollDown={this.scrollDown}/>*/}
      </div>
    );
  }
}