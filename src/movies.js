import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './movieList';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component {
  render() {
    let movieData = this.props.movies;
    return(
      <>
      <Card className="w-75 text-center mx-auto p-3 mt-2" bg="secondary">
        <Card.Title><h3>🎞️ Movies about {this.props.city} 🍿</h3></Card.Title>
        {movieData.slice(0,10).map((element, index) => (
          <div key={index}>
            <MovieList 
            index={index}
            title={element.title} 
            img={element.imageUrl}
            overview={element.overview} 
            release={element.releasedOn}
            movieID={element.movieID}
            />

          </div>
        ))}
      </Card>
       
      </>
    )
  }
}

export default Movies;