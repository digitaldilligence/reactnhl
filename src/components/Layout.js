import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
class Layout extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Navbar />
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                </BrowserRouter>
            </div>
        )
    }
}

export default Layout;