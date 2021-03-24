import React from 'react';
import Header from './header';
import Footer from './footer';
import City from './city';
import Error from './error';
import Weather from './weather';
import './app.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      locationSearch: '',
      displayResults: false,
      mapSrc: '',
      errMsg: {},
      returnsError: false,
      weatherArray: []
    }
  }

  getLocationData = async (e) => {
    e.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.locationSearch}&format=json`;
      const location = await axios.get(url);
      const locationArray = location.data;

      const SERVER = 'http://localhost:3001';
      const weather = await axios.get(`${SERVER}/weather?${locationArray[0].lat}&lon=${locationArray[0].lon}`);
      
      this.setState({
        location: locationArray[0],
        displayResults: true,
        mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=15&markers=icon:small-red-cutout|${locationArray[0].lat},${locationArray[0].lon}`,
        weatherArray: weather.data
        
      })
    }catch(error) {
      console.log(error.message);
      this.setState({
        returnsError: true,
        errMsg: error.message,
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        
        <Form inline className="w-responsive text-center mx-auto p-3 mt-2" onSubmit={this.getLocationData}>
          <Form.Row >
            <Col>
             <Form.Group >
              <Form.Control onChange={(e) => this.setState({ locationSearch: e.target.value })} type="text" placeholder="Enter a city" />
            </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Explore!
              </Button>
            </Col>
          </Form.Row>
        </Form>
        {this.state.returnsError &&
          <>
          <Error 
            displayError={this.state.errMsg}
          />
          </>
        }
        <City 
          city={this.state.location.display_name}
          latitude={this.state.location.lat}
          longitude={this.state.location.lon}
          displayResults={this.state.displayResults}
          mapSrc={this.state.mapSrc}
        />

        <Weather
          weather={this.state.weatherArray.forecastArray}
        />

        <Footer />

      </>
    );
  }
}

// test
export default App;
