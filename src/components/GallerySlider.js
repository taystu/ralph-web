import React, { Component } from 'react';
import Slider from 'react-slick';

import IconButton from 'material-ui/IconButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back';


const Arrow = (props)=> {
  return (
    <p>I am Arrow</p>
  )
}

const  settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};


export default class GallerySlider extends Component {

  render() {

    return (
      <div>
        <Slider  settings={settings}>
          <div>
            <p>Test</p>
          </div>
        </Slider>
      </div>
    )
  }
}