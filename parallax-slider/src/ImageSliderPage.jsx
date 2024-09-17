import React from 'react';
import ImageSlider from './ImageSlider';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ImageSliderPage.css';

const ImageSliderPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <Container fluid className="image-slider-page">
      <section className="intro-content">
        <h1 className="intro-heading">Explore Our Gallery</h1>
        <p className="intro-text">
          Enjoy the curated selection of stunning images we have on display. 
          These images represent the essence of beauty captured through our lens.
        </p>
      </section>
      
      <section className="slider-section">
        <h2 className="slider-heading"></h2>
        <div className="slider-box">
          <ImageSlider />
        </div>
      </section>

      <section className="additional-content">
        <h2 className="additional-heading">More Information</h2>
        <p className="dummy-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula dui nec erat ultrices, at fringilla lectus aliquam. Sed bibendum lorem at volutpat sollicitudin. Integer nec tortor velit. Pellentesque at orci libero. Donec auctor est vel ex vehicula, et varius magna placerat. Curabitur euismod orci nec purus sollicitudin lacinia.
        </p>
        <p className="dummy-text">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eget arcu vel mauris vestibulum pharetra sed sed turpis. Morbi ac feugiat nulla, id sollicitudin nisi. Aenean porttitor, eros sed fringilla fermentum, est turpis facilisis erat, nec vehicula erat nisl sed justo.
        </p>
      </section>

      <div className="back-button-container">
        <Button variant="danger" size="lg" onClick={goBack} className="back-button">
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default ImageSliderPage;
