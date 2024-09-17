import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

// Custom Previous Arrow Component
const PreviousArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <i className="bi bi-arrow-left-circle"></i> {/* Bootstrap icon for left arrow */}
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <i className="bi bi-arrow-right-circle"></i> {/* Bootstrap icon for right arrow */}
    </div>
  );
};

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />
  };

  const sliderContent = [
    {
      image: '/images/slide1.jpg',
      caption: 'Retro BMW',
    },
    {
      image: '/images/slide2.jpg',
      caption: 'Vibrating Odometer',
    },
    {
      image: '/images/slide3.jpg',
      caption: 'Vibrant City Lights',
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderContent.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
            <div className="caption-container">
              <h3 className="caption-text">{slide.caption}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
