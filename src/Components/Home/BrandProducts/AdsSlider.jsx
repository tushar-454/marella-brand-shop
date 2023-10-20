import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import slider1 from '../../../assets/slider-1.jpg';
import slider2 from '../../../assets/slider-2.jpg';
import slider3 from '../../../assets/slider-3.jpg';
export default class AdsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='w-full'>
            <img src={slider1} className='w-full rounded-md' />
          </div>
          <div className='w-full'>
            <img src={slider2} className='w-full rounded-md' />
          </div>
          <div className='w-full'>
            <img src={slider3} className='w-full rounded-md' />
          </div>
        </Slider>
      </div>
    );
  }
}
