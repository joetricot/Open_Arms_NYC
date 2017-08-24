import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="contactPage">
                <div>
                <h3 className="">Contact</h3><hr/>
                <h5>Do you have questions, comments, or concerns?<br/>
                <br/>
                Please send us your thoughts!</h5>
                </div>
                <div className="inputBox">
            <p>E-Mail:<input type="email" placeholder="email"></input></p>
            <textarea className="form-control commentsBox" rows="10"  placeholder="Ideas, Comments, Questions, or Suggestions Welcomed!"></textarea>
            <button type="submit" class="btn btn-default">Submit</button>
                <hr/>
                <div>
                <h3>Additional Resources</h3>
                <div className="row">
                <div className="panel panel-primary col-lg-4">
                    <div className="panel-heading">
                    <h3 class="panel-title">Food Stamps/ SNAP</h3>
                    </div>
                    <div className="panel-body">
                    <a href="tel:855-692-4322">855-692-4322</a>
                    </div>
                    </div>
  
                    <div className="panel panel-primary col-lg-4">
                    <div className="panel-heading">
                    <h3 class="panel-title">WIC Hotline</h3>
                    </div>
                    <div className="panel-body">
                    <a href="tel:800-522-5006">800-522-5006</a>
                    </div>
                    </div>

                    <div className="panel panel-primary col-lg-4">
                    <div className="panel-heading">
                    <h3 class="panel-title">Food Pantries</h3>
                    </div>
                    <div className="panel-body">
                    <a href="tel:866-888-8777">866-888-8777</a>
                    </div>
                    </div>
                    </div>
                
                    <div className="panel panel-primary col-lg-12">
                    <div className="panel-heading">
                    <h3 className="panel-title">Homebound Delivered Senior Meals</h3>
                    </div>
                    <div className="panel-body col-lg-6">
                    <a href="tel:212-222-2552">Washington Heights, Harlem: 212-222-2552</a>
                    <hr/>
                    <a href="tel:212-338-4333">East Harlem, Upper East Side: 212-338-4333</a>

                    </div>

                    <div className="panel-body col-lg-6">
                    <a href="tel:212-281-2910">Upper West Side, Midtown West: 212-281-2910</a>
                    <hr/>
                    <a href="tel:212-349-2770">Midtown East, Chelsea, Village, Downtown: 212-349-2770</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Contact;

