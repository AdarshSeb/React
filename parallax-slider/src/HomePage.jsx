import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';  // CSS for custom styles

const HomePage = () => {
  const navigate = useNavigate();

  const goToParallax = () => {
    navigate('/parallax');
  };

  const goToImageSlider = () => {
    navigate('/image-slider');
  };

  return (
    <div className="home-page">
      <Container className="text-center home-content">
        <h1 className="text-light mb-5">Welcome to the React Demo Website</h1>
        <Row>
          <Col>
            <Button variant="primary" size="lg" onClick={goToParallax}>
              Explore Parallax
            </Button>
          </Col>
          <Col>
            <Button variant="success" size="lg" onClick={goToImageSlider}>
              Explore Image Slider
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
