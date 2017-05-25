import React, { Component } from 'react';

import Slider from 'react-slick';
export default class InteriorSlider extends Component {

	constructor(props) {
		super(props);

		
	}


	handleSlideChange(e) {
		this.refs.slider.slickGoTo(e.target.value);
	}


	render() {

		return (
			<div className="main-slider">
				<div>
		      <Slider >
		        <div>
		        	<img src={require('../images/beach1.jpg')} alt=""/>
		        </div>
		      </Slider>
				</div>

				<div className="small-slider">
					<Slider>
						<div>
							<img src={require('../images/beach1.jpg')} alt=""/>
						</div>
						<div>
							<img src={require('../images/beach2.jpg')} alt=""/>
						</div>
						<div>
							<img src={require('../images/beach3.jpg')} alt=""/>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}
