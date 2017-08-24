import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div className="contactPage">
            <textarea class="form-control" rows="6" placeholder="Ideas, Comments, Questions, or Suggestions Welcomed!"></textarea>
            <button type="submit" class="btn btn-default">Submit</button>
            </div>
        )
    }
}

export default Contact;
