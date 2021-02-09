import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import SampleNavbar from "./Components/Navbar"
import Login from "./Components/Login";
import Register from "./Components/Register";

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
            </BrowserRouter>
        </div>
    );
}

export default App;