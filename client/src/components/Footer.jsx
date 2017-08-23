import React, { Component } from 'react';

class Footer extends Component {



    render() {
        return (
            <footer>
                <div className="container">
                <nav className="navbar text-white">
                        <div className="copyright">
                            &copy; 2017 Open Arms - NYC
                        </div>
                        <div>
                            <a className="btn btn-outline-warning btn-sm" href="#">DONATE</a>
                        </div>
                </nav>      
                </div>
            </footer>
        )
    }
}

export default Footer;