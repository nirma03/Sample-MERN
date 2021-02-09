import React, {Component} from 'react';

import {Button, Form, FormControl, Nav,Navbar} from "react-bootstrap";
import {Router} from "react-router";

class SampleNavbar extends Component {
    render() {
        return (
            <div className="App">

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Sample MERN </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="mr-sm-2" variant="outline-info">Search</Button>
                        <Button className="mr-sm-2" variant="outline-info" a href="/login">Login</Button>
                        <Button className="mr-sm-2" variant="outline-info" a href="/register">Sign Up</Button>
                    </Form>
                </Navbar>

            </div>
        );
    }
}

export default SampleNavbar;