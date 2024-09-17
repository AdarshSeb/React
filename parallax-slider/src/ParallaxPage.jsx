import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ParallaxPage.css';

const ParallaxPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <Container fluid className="parallax-page">
      {/* Parallax Section with a Single Image */}
      <section className="parallax-section parallax-bg">
        <h1 className="parallax-title">Parallax Effect Demo Using React</h1>
      </section>

      {/* Dummy Text Section */}
      <div className="content-section">
        <h2>About This Page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula dui nec erat ultrices, 
          at fringilla lectus aliquam. Sed bibendum lorem at volutpat sollicitudin.
        </p>
        <p>
          Integer nec tortor velit. Pellentesque at orci libero. Donec auctor est vel ex vehicula, 
          et varius magna placerat. Curabitur euismod orci nec purus sollicitudin lacinia.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Integer eget arcu vel mauris vestibulum pharetra sed sed turpis. Morbi ac feugiat nulla, 
          id sollicitudin nisi. Aenean porttitor, eros sed fringilla fermentum, est turpis facilisis erat, 
          nec vehicula erat nisl sed justo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula dui nec erat ultrices, 
          at fringilla lectus aliquam. Sed bibendum lorem at volutpat sollicitudin.
        </p>
        <p>
          Integer nec tortor velit. Pellentesque at orci libero. Donec auctor est vel ex vehicula, 
          et varius magna placerat. Curabitur euismod orci nec purus sollicitudin lacinia.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Integer eget arcu vel mauris vestibulum pharetra sed sed turpis. Morbi ac feugiat nulla, 
          id sollicitudin nisi. Aenean porttitor, eros sed fringilla fermentum, est turpis facilisis erat, 
          nec vehicula erat nisl sed justo.
        </p>
        <Button variant="primary" size="lg" onClick={goBack} className="back-button">
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default ParallaxPage;
