import React from 'react';
import WeatherDay from './weatherDay';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
  render() {
    let forecastData = this.props.weather;
    return (
      <>
      <Card>
        {forecastData.map((element, index) => (
          <WeatherDay key={index} date={element.date} description={element.description} />
        ))}
      </Card>
     
      </>
    );
  }
}

export default Weather;