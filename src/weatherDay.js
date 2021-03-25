import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
     return (
      <>
        <Card>
            <ListGroup>
              <ListGroup.Item>{this.props.date}</ListGroup.Item>
              <ListGroup.Item>{this.props.description}</ListGroup.Item>
            </ListGroup>
            {/* <Card.Title>{this.props.date}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text> */}
    
        </Card>

      </>
    );
  }
}

export default WeatherDay;