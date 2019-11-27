import React from 'react';
import axios from 'axios';
import Navbar from './Navbar.js';
import DailyWeather from './DailyWeather.js';
import {Form, Button, Row, Col} from "react-bootstrap";

class Overview extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <React.Fragment>
                <Navbar />
                <DailyWeather />
            </React.Fragment>
        );
    }
}

export default Overview;
