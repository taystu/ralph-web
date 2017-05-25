import React, {Component} from 'react';

import { Modal, Carousel, CarouselItem, Button } from 'react-bootstrap';

import '../style/BeachGallery.scss';


const BeachGallery = (props) => {
	return (
		<Modal {...props} bsSize="small" dialogClassName="beachModal">
				<Modal.Header>
					<h3 className="beach-gallery-header">Beach Gallery</h3>
          <Button className='pull-right' onClick={props.onHide}>Close</Button>					
				</Modal.Header>
        <Modal.Body>
        <Carousel style={{height: '50%'}}>
          <CarouselItem>
            <img width={'100%'} alt='900x500' src={require('../images/beach1.jpg')} />
            <Carousel.Caption>
            	<h3>North View</h3>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img width={'100%'} alt='900x500' src={require('../images/beach2.jpg')} />
	            <Carousel.Caption>
	            	<h3>South View</h3>
	            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img width={'100%'} alt='900x500' src={require('../images/beach3.jpg')} />
	            <Carousel.Caption>
	            	<h3>East View</h3>
	            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        </Modal.Body>
      </Modal>
	)
}

export default BeachGallery;