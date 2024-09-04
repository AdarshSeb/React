import React, { useState } from "react";
import { Container, Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import './App.css';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
      );
      if (response.status === 404) {
        throw new Error("City not found");
      }
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleButtonClick = () => {
    if (city) {
      fetchWeather();
    } else {
      setError("Please enter a city name");
    }
  };

  return (
    <Container className="weather-container mt-5">
      <h2 className="text-center text-light">Weather App</h2>
      <Form>
        <Form.Group controlId="cityName">
          <Form.Label className="text-light">City Name</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name and click the get weather button"
            className="mb-3"
          />
        </Form.Group>
        <Button className="mt-3 custom-button" onClick={handleButtonClick} block>
          Get Weather
        </Button>
      </Form>

      {loading && (
        <div className="text-center mt-4">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}

      {error && (
        <Alert className="mt-4" variant="danger">
          {error}
        </Alert>
      )}

      {weatherData && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Weather in {weatherData.name}</Card.Title>
            <Card.Text>
              <strong>Temperature:</strong> {weatherData.main.temp} °C <br />
              <strong>Weather:</strong> {weatherData.weather[0].description} <br />
              <strong>Humidity:</strong> {weatherData.main.humidity} % <br />
              <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Weather;
