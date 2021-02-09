import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import SampleNavbar from "./Components/Navbar"
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SampleNavbar/>
            <Switch>
                    <Route exact path="/"  component={HomePage} />
                    <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>

            </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;