import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
