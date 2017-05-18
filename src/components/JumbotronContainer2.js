import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import { Jumbotron, ButtonGroup, Button, Carousel, CarouselItem, Row, Col} from 'react-bootstrap';

import '../style/JumbotronContainer2.scss';

import DatePickerWrapper from './DatePickerWrapper';


export default class JumbotronContainer extends Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}


  render() {
    return (
    	<div className="home-jumbotron" style={{textAlign: 'center'}}>
              <ButtonGroup className="container">
                <h1 className="jumbotron-header">Salty Cottage Grand Turk</h1>
                <DatePickerWrapper />
                <Button bsStyle="info" bsSize="large" className="book-button"><Link to="booking">Book Now</Link></Button>
              </ButtonGroup>
            <Carousel>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <p className="hidden-xs">description here.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <p className="hidden-xs">description here.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    			<CarouselItem>
    				<img className="carousel-image" alt=""/>
    				<Carousel.Caption>
			        <p className="hidden-xs">description here.</p>
		     	 	</Carousel.Caption>
    			</CarouselItem>
    		</Carousel>
	      {/*<DownArrow scrollDown={this.scrollDown}/>*/}
      </div>
    );
  }
}