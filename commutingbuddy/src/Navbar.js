import React from 'react';
import {Nav, Navbar} from "react-bootstrap";


class WeatherNavbar extends React.Component{

    constructor(props){

        super(props);
        this.state = {

        };
    }


    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Hourly </Nav.Link>
                        <Nav.Link href="#link">Daily </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default WeatherNavbar;
