import React, { Component } from 'react';

class Header extends Component {



    render() {
        return (
            <header className="header bg-info col-sm-12">
                <h3 className="col-sm-3">Open Arms NYC</h3>
                <nav className="nav">
                    <ul className=" list-inline col-xs-4 col-md-offset-5">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;