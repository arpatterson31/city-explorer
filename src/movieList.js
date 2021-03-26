import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

class MovieList extends React.Component {
  render() {
     return (
      <>
      <CardDeck>
     
        <Card >
          <Card.Title><h3>{this.props.title}</h3></Card.Title>
          <Card.Img src={this.props.img} />
          <Card.Text>{this.props.overview}</Card.Text>
          <Card.Footer >
            <small className="text-muted pb-2">Release Date: {this.props.release}</small>
          </Card.Footer>     
        </Card>

      

      </CardDeck>

      </>
    );
  }
}

export default MovieList;