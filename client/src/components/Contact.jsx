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
                </div>
            </div>
        )
    }
}

export default Contact;