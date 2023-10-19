import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
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
            <img src='https://cutt.ly/kwQ01rH7' className='w-full rounded-md' />
          </div>
          <div className='w-full'>
            <img src='https://cutt.ly/WwQ009xc' className='w-full rounded-md' />
          </div>
          <div className='w-full'>
            <img src='https://cutt.ly/TwQ09p32' className='w-full rounded-md' />
          </div>
        </Slider>
      </div>
    );
  }
}
