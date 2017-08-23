import React, { Component} from 'react';
import axios from 'axios';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      currentRating: null,
      input: null,
    }
    this.submitRating = this.submitRating.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  componentDidMount() {
    console.log('comment did mount')
    console.log(this.props.currentLocation)
    if (this.props.currentLocation) {
       axios.get(`${this.props.currentLocation}/rating`)
        .then(res => {
          console.log(res.data);
          this.setState({
            currentRating: res.data.data,
          });
          console.log(this.state);
      }).catch(err => console.log(err));
    }
   
  }

  submitRating(e) {
    e.preventDefault();
    console.log(e.target.value)
    if (this.state.rating) {
      console.log(this.state);
      alert(this.state.rating);
      this.setState({
       
      })
      this.updateRating();
      console.log('*****' , this.state)
      //axios.put(this.props.currentLocation)
    } 
  }

  updateRating() {
    if (this.state.updateRating) {
      console.log('***** update rating')
      axios.put(this.props.currentLocation, {
        ratingSum: this.state.ratingSum,
        numRatings: this.state.numRatings,
      });
      this.setState({
        updateRating: false,
      });
    }
  }
   
  handleRatingChange(e) {
    console.log(e.target.value);
    this.setState({
      rating: e.target.value,
    });
  }

  render() {
    return (
      <div className="comments bg-warning col-sm-4 col-sm-12">
        <h3>Rate this place</h3>
        <h4>{this.props.currentLocation}</h4>
        <h4>{this.props.rating}</h4>

        <form method='POST' action={`${this.props.currentLocation}/rating`}>
        <select name='rating' onChange={this.handleRatingChange}>
          <option value='1' ref={(input) => this.input = input}>1</option>
          <option value='2' ref={(input) => this.input = input}>2</option>
          <option value='3' ref={(input) => this.input = input}>3</option>
          <option value='4' ref={(input) => this.input = input}>4</option>
          <option value='5' ref={(input) => this.input = input}>5</option>
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