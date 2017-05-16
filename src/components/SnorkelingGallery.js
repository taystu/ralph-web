import React, {Component} from 'react';

import { Modal, Carousel, CarouselItem, Button } from 'react-bootstrap';

import '../style/BeachGallery.scss';


const SnorkelingGallery = (props) => {
	return (
		<Modal {...props} bsSize="small" dialogClassName="beachModal">
				<Modal.Header>
					<h3 className="beach-gallery-header">Snorkelling in Grand Turk</h3>
          <p className="hidden-xs hidden-sm">The west and northwest sides of the island probably offer the best locations for snorkelling from the beach. </p>
          <p className="hidden-xs hidden-sm">If the ocean conditions are calm, Boaby Rock Point offers the nicest beach snorkelling site on the island.</p>
          <p className="hidden-xs hidden-sm">Cockburn Town Beach and English Point have ancient coral shelf and gulley formations near to the shore in many places.</p>
          <Button className='pull-right' onClick={props.onHide}>Close</Button>					
				</Modal.Header>
        <Modal.Body>
        <Carousel>
          <CarouselItem>
            <img width={'100%'} height={200} alt='900x500' src={require('../images/snorkel1.jpg')} />
            <Carousel.Caption>
            	<h3>North View</h3>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img width={'100%'} height={200} alt='900x500' src={require('../images/snorkel2.jpg')} />
	            <Carousel.Caption>
	            	<h3>South View</h3>
	            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img width={'100%'} height={200} alt='900x500' src={require('../images/snorkel3.jpg')} />
	            <Carousel.Caption>
	            	<h3>East View</h3>
	            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        </Modal.Body>
      </Modal>
	)
}

export default SnorkelingGallery;