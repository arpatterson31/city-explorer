import React from 'react';
import WeatherDay from './weatherDay';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
  render() {
    let forecastData = this.props.weather;
    return (
      <>
      <div className="pb-5">
      <Card className="w-75 text-center mx-auto p-3 mt-2" bg="secondary">
        <Card.Title><h3>🌤️ 7 Day Forecast 🌧️</h3></Card.Title>
        {forecastData.map((element, index) => (
          <div key={index}>
            <WeatherDay key={index} date={element.date} description={element.description} />

          </div>
        ))}
      </Card>

      </div>
     
      </>
    );
  }
}

export default Weather;