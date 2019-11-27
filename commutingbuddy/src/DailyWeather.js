import React from 'react';
import axios from 'axios'
import {Form, Button, Row, Col} from "react-bootstrap";

const URL = "http://api.openweathermap.org/data/2.5/weather?zip="

// break this into 3 classes
// hourly, daily, weekly
// const URL = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&APPID=10454678947cf3d0a8b4443223257148"
// what does extends mean
class DailyWeather extends React.Component{
    //what is a constructor
    constructor(props){
        // what is super
        super(props);
        this.state = {
            weatherInfo: "",
            weatherData: "",
            zipCode: '',
            // isData: false
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        // what is regex and when do we use it
        var isValidZip = /^\d{5}(-\d{4})?$/.test(this.state.zipCode);
        if(!isValidZip){
            console.log("enter a valid zipcode");
            return;
        }

        // else{
            // var getWeatherURL = URL+this.state.zipCode+",us&APPID=10454678947cf3d0a8b4443223257148"

            axios.get(URL+this.state.zipCode+",us&APPID=10454678947cf3d0a8b4443223257148").then(
                response => {
                    console.log(response.data.main);
                    var weatherData =  response.data.main;
                    const weatherInfo = Object.fromEntries(
                        Object.entries(weatherData)
                        .map(([ key, val ]) => [ key, Math.round((val * 9/5) - 459.67) ])
                    );
                    console.log(response.data.main);
                    console.log(weatherInfo);
                    this.setState({
                        // choose different names
                        weatherData: response.data,
                        weatherInfo: weatherInfo,
                        // isData: true
                    })

                    // windy
                    // rainy
                    // check if raining at 9/12/5 -> bring umbrella

                }
            )
        // }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                
                <Row>
                <Col sm={3}>
                    <Form>
                      <Form.Group controlId="formZipCode">
                        <Form.Label>Enter your zip code:</Form.Label>
                        <Form.Control type="text" placeholder="" name="zipCode" onChange={this.handleChange}/>
                      </Form.Group>
                      <Button variant="primary" type="submit" onClick={this.handleClick}>
                      Go!
                      </Button>
                    </Form>

                </Col>
                </Row>
                <div>
                {this.state.weatherInfo ?
                <label>
                It is currently {this.state.weatherInfo.temp} degrees in {this.state.weatherData.name}
                </label>
                :
                <label>
                </label>

                }
                </div>

            </div>


        );
    }

}

export default DailyWeather;
