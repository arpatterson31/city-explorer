import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class City extends React.Component {
  render() {
    return (
      <>
        {this.props.displayResults &&
          <>
            <Card className="w-75 text-center mx-auto p-3 mt-2" >
              <Card.Header as="h4">{this.props.city}</Card.Header>
              <ListGroup variant="flush">
               <ListGroup.Item>{this.props.latitude}</ListGroup.Item>
               <ListGroup.Item>{this.props.longitude}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Img src={this.props.mapSrc} />
              </Card.Body>
            </Card>
          </>
        }
      </>
    );
  }
}

export default City;