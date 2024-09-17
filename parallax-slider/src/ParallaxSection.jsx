import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxSection = () => {
  return (
    <div>
      {/* Parallax Image Section */}
      <Parallax bgImage="/images/parallax-bg.jpg" strength={500}>
        <div style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '3em', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)' }}>
            Welcome to Parallax World
          </h1>
        </div>
      </Parallax>

      {/* Content Section */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>About This Page</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2em', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula dui nec erat ultrices, at fringilla lectus aliquam. Sed bibendum lorem at volutpat sollicitudin. Integer nec tortor velit. Pellentesque at orci libero. Donec auctor est vel ex vehicula, et varius magna placerat. Curabitur euismod orci nec purus sollicitudin lacinia.
        </p>
        <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.2em', lineHeight: '1.6' }}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eget arcu vel mauris vestibulum pharetra sed sed turpis. Morbi ac feugiat nulla, id sollicitudin nisi. Aenean porttitor, eros sed fringilla fermentum, est turpis facilisis erat, nec vehicula erat nisl sed justo.
        </p>
      </div>
    </div>
  );
};

export default ParallaxSection;
