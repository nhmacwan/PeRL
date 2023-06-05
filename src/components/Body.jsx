import React, { Component } from 'react';
//import {Route, BrowserRouter, Router} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { Routes } from 'react-router-dom';

import Home from "./Home";
import About from "./About";

class Body extends Component{
    state = {};
    render() {
        return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={Home}></Route>
                <Route path='/About' exact element={About}></Route>
            </Routes>
        </BrowserRouter>
        <Home>
        </Home>
    </div>
        );

    }
}

export default Body;