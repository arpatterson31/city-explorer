import React from 'react';
import WeatherDay from './weatherDay';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
  render() {
    let data = this.props.weather;
    return (
      <>
      <Card>
        {data.map((element, index) => (
          <WeatherDay key={index} date={element.date} desc={element.description} />
        ))}
      </Card
      >
     
      </>
    );
  }
}

export default Weather;