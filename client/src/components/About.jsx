import React, { Component } from 'react';
import '../App.css';

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
                "Give me your tired, your poor,<br/>
                Your huddled masses yearning to breathe free,<br/>
                The wretched refuse of your teeming shore.<br/>
                Send these, the homeless, tempest-tost to me,<br/>
                I lift my lamp beside the golden door!"<br/>
                <footer> <cite title="Source Title">Emma Lazarus</cite></footer>

                </blockquote>

                <img className="circle pull-right img-responsive" src="/ter1.jpg" alt="teresa" />

                <blockquote className="blockquote blockquote-reverse clearfix">
                I alone cannot change the world. But I can cast a stone <br/>across the waters to create many
                ripples.<br/>
                <footer> <cite title="Source Title">Mother Teresa</cite></footer>
                </blockquote>

                <div className="aboutInfo">
                <h4> <span className="blue">Open Arms NYC</span> is a resource for people struggling with homelessness or poverty in New York City.<br/><br/>
                    Our clean & simple application provides the information of all food pantries and shelters in NYC,<br/>
                    as well as other resources, such as public bathrooms, job opportunities and more.<br/>
                        <br/>
                    <span className="blue">Open Arms NYC</span> is a project started by students at General Assembly's Web Development Immersive<br/>
                    course in NYC.<br/><br/>

                    This application is an educational and not-for-profit service.

                </h4>
                </div>
            </div>
        );
    };
}
export default About;
