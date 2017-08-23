import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class About extends Component {
    render() {
        return(
            <div className="about m-top-three">
                <div Col xs={6} md={4}>
                <img src="./public/lib1.jpg" />
                </div>
                <blockquote>
                Your huddled masses, yearning to breathe free, The wretched refuse of your teeming shore,
                Send these, the homeless, tempest tost to me, I lift my lamp beside the golden door.
                </blockquote>
            </div>
        );
    };    
}

export default About;