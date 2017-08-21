import React, { Component } from 'react';

class Footer extends Component {



    render() {
        return (
            <footer className="container-fluid bg-success col-xs-12">
                {/* element should be floated left */}
                <h4 className="col-xs-12 col-sm-6 col-md-8">© Open Arms -New York Footer</h4>
                {/* float right and links to specific info */}
                <ul className="list-unstyled list-inline col-xs-6 col-md-4">
                    <li>ABOUT</li>
                    <li>|</li>
                    <li>MEET THE TEAM</li>
                    <li>|</li>
                    <li>DONATE</li>
                </ul>    
            </footer>
        )
    }
}

export default Footer;