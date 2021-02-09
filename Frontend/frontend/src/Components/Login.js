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


class Login extends Component {
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
                                        <h3 className='dark-grey-text text-center'>
                                            <strong>Login</strong>
                                        </h3>
                                        <hr />
                                        <MDBInput label='Email' icon='user' type="email" />
                                        <MDBInput label='Password' icon='envelope' />
                                        <div className='text-center mt-3 black-text'>
                                            <MDBBtn color='indigo'>Send</MDBBtn>
                                            <MDBBtn color='indigo'>Send</MDBBtn>
                                            <br/>
                                            <br/>
                                            <MDBModalFooter>
                                                <div className="font-weight-light">
                                                    <p className="font-small grey-text mt-3">
                                                        Don't have an account?
                                                        <a
                                                            href="/register"
                                                            className="dark-grey-text ml-1 font-weight-bold"
                                                        >
                                                            Sign up
                                                        </a>
                                                    </p>
                                                </div>
                                            </MDBModalFooter>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>

            // <MDBContainer>
            //     <MDBRow>
            //         <MDBCol md="6">
            //             <MDBCard>
            //                 <MDBCardBody>
            //                     <form>
            //                         <p className="h4 text-center py-4">Sign up</p>
            //                         <div className="grey-text">
            //                             <MDBInput
            //                                 label="Your name"
            //                                 icon="user"
            //                                 group
            //                                 type="text"
            //                                 validate
            //                                 error="wrong"
            //                                 success="right"
            //                             />
            //                             <MDBInput
            //                                 label="Your email"
            //                                 icon="envelope"
            //                                 group
            //                                 type="email"
            //                                 validate
            //                                 error="wrong"
            //                                 success="right"
            //                             />
            //                             <MDBInput
            //                                 label="Confirm your email"
            //                                 icon="exclamation-triangle"
            //                                 group
            //                                 type="text"
            //                                 validate
            //                                 error="wrong"
            //                                 success="right"
            //                             />
            //                             <MDBInput
            //                                 label="Your password"
            //                                 icon="lock"
            //                                 group
            //                                 type="password"
            //                                 validate
            //                             />
            //                         </div>
            //                         <div className="text-center py-4 mt-3">
            //                             <MDBBtn color="cyan" type="submit">
            //                                 Register
            //                             </MDBBtn>
            //                         </div>
            //                     </form>
            //                 </MDBCardBody>
            //             </MDBCard>
            //         </MDBCol>
            //     </MDBRow>
            // </MDBContainer>
        );
    }
}

export default Login;