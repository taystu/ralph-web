import React, { Component } from 'react';
import Slider from 'react-slick';

import { Jumbotron, Button, Carousel, CarouselItem } from 'react-bootstrap';

import '../style/JumbotronContainer2.scss';



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
			        <h3>Beach North Lol</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <h3>Beach North Lol</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <h3>Beach North Lol</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    		</Carousel>
	      {/*<DownArrow scrollDown={this.scrollDown}/>*/}
      </div>
    );
  }
}