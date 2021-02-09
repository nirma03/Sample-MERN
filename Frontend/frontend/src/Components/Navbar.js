import React, {Component} from 'react';
import {Button, Form, FormControl, Nav,Navbar} from "react-bootstrap";

class SampleNavbar extends Component {
    render() {
        return (
            <div className="App">

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Sample MERN </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="mr-sm-2" variant="outline-info">Search</Button>
                        <Button className="mr-sm-2" variant="outline-info" >Login</Button>
                        <Button className="mr-sm-2" variant="outline-info">Sign Up</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default SampleNavbar;