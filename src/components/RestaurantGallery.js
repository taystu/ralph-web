import React, {Component} from 'react';

import { Modal, Carousel, CarouselItem, Button } from 'react-bootstrap';

import '../style/BeachGallery.scss';


const RestaurantGallery = (props) => {
	return (
		<Modal {...props} bsSize="small" dialogClassName="beachModal">
				<Modal.Header>
					<h3 className="beach-gallery-header">Restaurants in Grand Turk</h3>
          <Button className='pull-right' onClick={props.onHide}>Close</Button>					
				</Modal.Header>
        <Modal.Body>
        <Carousel>
          <CarouselItem>
            <img width={'100%'} height={200} alt='900x500' src={require('../images/restaurant1.jpg')} />
            <Carousel.Caption>
            	<h3>Bohio Restaurnt</h3>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img width={'100%'} height={200} alt='900x500' src={require('../images/restaurant2.jpg')} />
	            <Carousel.Caption>
	            	<h3>Sanddals</h3>
	            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img width={'100%'} height={200} alt='900x500' src={require('../images/restaurant3.jpg')} />
	            <Carousel.Caption>
	            	<h3>Lobster Pallace</h3>
	            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        </Modal.Body>
      </Modal>
	)
}

export default RestaurantGallery;