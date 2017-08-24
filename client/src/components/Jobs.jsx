import React, { Component } from 'react';

class Jobs extends Component {
    render() {
        return (
            <div className="jobs">

            <h1>Everyone Deserves a Fair Shot</h1>
            <h3>Connecting people in need with effective placement programs is important for long-term stability and success.</h3>
        <div className="container">
        <div className="row">
            <div className="panel panel-default col-lg-12 col-lg-6">
            <div className="panel-body">
                <div className="media">
                <div className="media-left">
                <a target="_blank" href="https://www.doe.org/programs/ready-willing-able">
                <img className="media-object " src="/images/doefund.jpg" alt="..."/>
                </a>
                </div>
                <div className="media-body">
                <h4 className="media-heading">The Doe Fund</h4>

                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="panel panel-default col-lg-12 col-lg-6 pull-right">
            <div className="panel-body">
                <div className="media">
                <div className="media-right">
                <a target="_blank" href="http://www.coalitionforthehomeless.org/our-programs/first-step-job-training/first-step/">
                <img className="media-object" src="images/firststeps.jpg" alt="..."/>
                </a>
                </div>
                <div className="media-body">
                <h4 className="media-heading">First Step Job Training Program</h4>
                ...
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="panel panel-default col-lg-12 col-lg-6">
            <div className="panel-body">
                <div className="media">
                <div className="media-left">
                <a target="_blank" href="http://www.acenewyork.org/our-programs/">
                <img className="media-object" src="/images/ace.jpg" alt="..."/>
                </a>
                </div>
                <div className="media-body">
                <h4 className="media-heading">Ace: Empowering the Homeless. Improving Communities.</h4>
                ...
                </div>
                </div>
            </div>
            </div>
        </div>

        </div>
        </div>


        )
    }
}

export default Jobs;
