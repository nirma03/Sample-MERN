import React, {Component} from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBInput
} from 'mdbreact';
import "../css/Login.css";
import axios from "axios";
import {toast} from "react-toastify";
import {serverUrl} from "./config";
import {Form} from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class Register extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeContact= this.onChangeContact.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            contact: ""
        };
    }

    // updateInput(key, value) {
    //     this.setState({
    //         [key]: value,
    //     });
    // }
    onChangeUsername(event){
        this.setState({
            username: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangeEmail(event){
        this.setState({
            email: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangePassword(event){
        this.setState({
            password: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangeConfirmPassword(event){
        this.setState({
            confirmPassword: event.target.value,
            [event.target.name]: event.target.value

        })
    }
    onChangeContact(event){
        this.setState({
            contact: event.target.value,
            [event.target.name]: event.target.value

        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Submit button");
        const users = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            contact: this.state.contact,
        };

        if (this.state.password === this.state.confirmPassword) {
            axios
                .post(serverUrl + "/users/add", users)
                .then((response) => {
                    console.log(users);
                    toast("Register Successful! \n You will be redirected to Login Page");
                    console.log("User added!")
                    setTimeout(() => {
                        window.location = "/login";
                    }, 5000);
                })
                .catch((error) => {
                    console.log(error.response);
                    toast("Email or Username Exists");
                    this.setState({
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        contact:""
                    });
                });
        } else {
            toast("Password doesn't match");
            this.setState({
                password: "",
                confirmPassword: "",
            });
        }
    }

    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }
    render() {
        const { collapseID } = this.state;
        const navStyle = { marginTop: '65px' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.toggleCollapse('navbarCollapse')}
            />
        );
        return (
            <div id='contactformpage'>
                <MDBView>
                    <MDBMask overlay='indigo-strong' />
                    <MDBContainer
                        style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <MDBRow>
                            <div className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
                                <h1 className='display-4 font-weight-bold'>Lorem ipsum </h1>
                                <hr className='hr-light' />
                                <h6 className='mb-4'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                                    repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                                    sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                                    iste.
                                </h6>
                                <MDBBtn outline color='white'>
                                    Learn More
                                </MDBBtn>
                            </div>
                            <MDBCol md='6' xl='5' className='mb-4'>
                                <MDBCard className='dark-grey-text'>
                                    <MDBCardBody className='z-depth-2'>
                                        <Form onSubmit={this.onSubmit} >
                                        <h3 className='dark-grey-text text-center'>
                                            <strong>Sign Up</strong>
                                        </h3>
                                        <hr />
                                        <MDBInput label='Username' icon='user' type="text" onChange={this.onChangeUsername}
                                                  value={this.state.username} name="username"
                                                  required />
                                        <MDBInput label='Email' icon='envelope' type="email" onChange={this.onChangeEmail}
                                                  value={this.state.email} name="email"
                                                  required/>
                                        <MDBInput label='Password' icon='user' type="password" onChange={this.onChangePassword}
                                                  value={this.state.password} name="password"
                                                  required />
                                        <MDBInput label='Confirm Password' icon='envelope' type="password" onChange={this.onChangeConfirmPassword}
                                                  value={this.state.confirmPassword} name="confirmPassword"
                                                  required />
                                        <MDBInput label='Contact' icon='user' type="text" onChange={this.onChangeContact}
                                                  value={this.state.contact} name="contact"
                                                  required />
                                        <div className='text-center mt-3 black-text'>
                                            <MDBBtn color='indigo' type="submit" >Sign Up</MDBBtn>
                                            <MDBBtn color='indigo'>Clear</MDBBtn>
                                            <br/>
                                            <br/>
                                            <MDBModalFooter>
                                                <div className="font-weight-light">
                                                    <p className="font-small grey-text mt-3">
                                                        Already a member?
                                                        <a
                                                            href="/login"
                                                            className="dark-grey-text ml-1 font-weight-bold"
                                                        >
                                                            Login
                                                        </a>
                                                    </p>
                                                </div>
                                            </MDBModalFooter>
                                        </div>
                                        </Form>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default Register;