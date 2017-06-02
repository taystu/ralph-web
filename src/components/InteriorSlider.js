import React, { Component } from 'react';


import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import '../style/InteriorSlider.scss';


export default class InteriorSlider extends Component {


	constructor(props) {
		super(props);

	}


	handleSlideChange(e) {
		this.refs.main.slickGoTo(e);
		this.refs.small.slickGoTo(e);
	}


	render() {
		var mainSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: 0,
      arrows: false,
      draggable: true,
      infinite: true,
      swipeToSlide: true
    };
		var smallSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      swipeToSlide: true,
      responsive: [
      	{breakpoint: 992, settings: {slidesToShow: 4}},
      	{breakpoint: 768, settings: {slidesToShow: 3}}
      ]

    };

		return (
			<div>
				<div className="main-slider">
		      <Slider ref='main' {...mainSettings}>
		        <div>
		        	<Image className="main-image" src={require('../images/interior/livingroom.jpg')} alt="" responsive/>
		        </div>
		        <div>
		        	<Image className="main-image" src={require('../images/interior/kitchen.jpg')} alt="" responsive/>
		        </div>
		        <div>
		        	<Image className="main-image" src={require('../images/interior/bedroom1.jpg')} alt="" responsive/>
		        </div>
		        <div>
		        	<Image className="main-image" src={require('../images/interior/bedroom2.jpg')} alt="" responsive/>
		        </div>
		        <div>
		        	<Image className="main-image" src={require('../images/interior/kitchen.jpg')} alt="" responsive/>
		        </div>
		      </Slider>
				</div>

				<div className="small-slider">
					<Slider ref='small' {...smallSettings} >
						<div onClick={()=> this.handleSlideChange(0)} className="custom-slide">
							<span className="small-slider-text hidden-xs">
								<h4>Living Room</h4>
							</span>
							<Image src={require('../images/interior/livingroom.jpg')} alt="" responsive/>
						</div>
						<div onClick={()=> this.handleSlideChange(1)} className="custom-slide">
							<span className="small-slider-text hidden-xs">
								<h4>Kitchen</h4>
							</span>
							<Image src={require('../images/interior/kitchen.jpg')} alt="" responsive/>
						</div>
						<div onClick={()=> this.handleSlideChange(2)} className="custom-slide">
							<span className="small-slider-text hidden-xs">
								<h4>Bedroom 1</h4>
							</span>
							<Image src={require('../images/interior/bedroom1.jpg')} alt="" responsive/>
						</div>
						<div onClick={()=> this.handleSlideChange(3)} className="custom-slide">
							<span className="small-slider-text hidden-xs">
								<h4>Bedroom 2</h4>
							</span>
							<Image src={require('../images/interior/bedroom2.jpg')} alt="" responsive/>
						</div>
						<div onClick={()=> this.handleSlideChange(5)} className="custom-slide">
							<span className="small-slider-text hidden-xs">
								<h4>Kitchen</h4>
							</span>
							<Image src={require('../images/interior/kitchen.jpg')} alt="" responsive/>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}
