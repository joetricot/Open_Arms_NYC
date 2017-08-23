import React, { Component} from 'react';
import axios from 'axios';

class Comments extends Component {
  constructor() {
    super();
    this.submitRating = this.submitRating.bind(this);
  }

  componentDidMount() {
    console.log('comment did mount')
  }
    /*
    console.log(this.props.currentLocation)
    if (this.props.currentLocation) {
      axios.get(`${this.props.currentLocation}/rating`)
      .then(res => {
        console.log(res.data);
        this.setState({
          currentRating: res.data.data,
        })
        console.log(this.state);
      }).catch(err => console.log(err));
    }
  } */

  submitRating(e) {
    e.preventDefault();
    axios.post(`${this.props.locationUrl}/rating`, {
      rating: e.target.rating.value
    }).then((res) => {  
        res.json({
          message: 'added rating successfully',
        });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="comments bg-warning col-sm-4 col-sm-12">
        <h3>Rate this place</h3>
        <h4>{this.props.locationUrl}</h4>
        <h4>{this.props.rating}</h4>

        <form onSubmit={this.submitRating}>
        <select name='rating' onChange={this.handleRatingChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>

        </select>
        <button type='submit'>Submit</button>
        </form>
        
        </div>
        )
    }
}
/*
<form id='rating-form' onClick={this.submitRating} >
          <label>
          <input type='checkbox' value="1"/>
          I would not reccomend this place.
          </label>

          <label>
          <input type='checkbox' value="2" />
          this place was so-so.
          </label>

          <label>
          <input type='checkbox' value="3" />
          This place was decent.
          </label>

          <label>
          <input type='checkbox' value="4" />
          This place was better than most.
          </label>

          <label>
          <input type='checkbox' value="5"/>
          This was the best place Ive been to.
          </label>

          <input type='submit' value='submit' />
        </form>
*/

export default Comments;