import React, { Component} from 'react';
import axios from 'axios';

class Comments extends Component {
  constructor() {
    super();
    this.submitRating = this.submitRating.bind(this);
  }

  componentDidMount() {
    console.log('comment did mount')
    axios.get(this.props.currentLocation)
    .then(res => {
      console.log(res.data);
    }).catch(err => console.log(err));
  }

  submitRating() {

  }
   
  render() {
    return (
      <div className="comments bg-warning col-sm-4 col-sm-12">
        <h3>Rate this place</h3>
        <form id='rating-form'>
          <label>
          <input type='checkbox' value={1} />
          I would not reccomend this place.
          </label>

          <label>
          <input type='checkbox' value={2} />
          this place was so-so.
          </label>

          <label>
          <input type='checkbox' value={3} />
          This place was decent.
          </label>

          <label>
          <input type='checkbox' value={4} />
          This place was better than most.
          </label>

          <label>
          <input type='checkbox' value={5} />
          This was the best place Ive been to.
          </label>

          <input type='submit' value='submit' />
        </form>
        </div>
        )
    }
}

export default Comments;