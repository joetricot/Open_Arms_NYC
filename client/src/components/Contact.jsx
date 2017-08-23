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
                <div class="input-group input-group-lg">
            <textarea class="form-control" rows="8"  placeholder="Ideas, Comments, Questions, or Suggestions Welcomed!"></textarea>
            <button type="submit" class="btn btn-default">Submit</button>
                </div>
            </div>
        )
    }
}

export default Contact;