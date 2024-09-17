import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ParallaxPage from './ParallaxPage';
import ImageSliderPage from './ImageSliderPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parallax" element={<ParallaxPage />} />
        <Route path="/image-slider" element={<ImageSliderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
