import React, { Component } from 'react';

class Footer extends Component {



    render() {
        return (
            <footer>
                {/* element should be floated left */}
                <h2>© Open Arms -New York</h2>
                {/* float right and links to specific info */}
                <ul>
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