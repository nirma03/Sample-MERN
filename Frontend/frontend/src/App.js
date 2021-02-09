import React from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
            <Switch>
                    <Route exact path="/"  component={HomePage} />
            </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;