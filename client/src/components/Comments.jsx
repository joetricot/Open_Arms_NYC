import React, { Component } from "react";
import axios from "axios";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      userRating: null,
      ratingSubmitted: false
    };
    this.submitRating = this.submitRating.bind(this);
    this.hasRatedMessage = this.hasRatedMessage.bind(this);
  }

  componentDidMount() {
    console.log("comment did mount");
  }

  submitRating(e) {
    e.preventDefault();
    let userRating = e.target.rating.value;
    this.setState({
      userRating: userRating,
      ratingSubmitted: true
    });
    axios
      .post(`${this.props.locationUrl}/rating`, {
        rating: userRating
      })
      .then(() => {})
      .catch(err => console.log(err));
  }

  hasRatedMessage() {
    if (this.state.ratingSubmitted) {
      //document.getElementById('rating-form').remove();
      return (
        <div>
          <h4>Thank you for rating</h4>
          <p>
            your rating: {"★".repeat(this.state.userRating)}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="col-xs-12 col-md-4 comments">
        <div className="comments-body col-xs-12 col-md-10">
          <div className="comment-header">
            <h3>RATE THIS PLACE</h3>
            <p>
              {this.props.data.name}
            </p>
            <p>
              {this.props.rating
                ? "★".repeat(this.props.rating)
                : "no ratings yet"}
            </p>
          </div>
          <hr />

          <form id="rating-form" onSubmit={this.submitRating}>
            <div className="rating-input">
              <input name="rating" type="radio" id="1" value={1} />
              <label for="1">I would not recommend this place.</label>
            </div>

            <div className="rating-input">
              <input name="rating" type="radio" id="2" value={2} />
              <label for="2">This place was so-so.</label>
            </div>

            <div className="rating-input">
              <input name="rating" type="radio" id="3" value={3} />
              <label for="3">This place was decent.</label>
            </div>

            <div className="rating-input">
              <input name="rating" type="radio" id="4" value={4} />
              <label for="4">This place was better than most.</label>
            </div>

            <div className="rating-input">
              <input name="rating" type="radio" id="5" value={5} />
              <label for="5">This was the best place Ive been to.</label>
            </div>

            <input
              className="btn"
              type="submit"
              value="SUBMIT"
              disabled={this.state.ratingSubmitted}
            />
          </form>
          {this.hasRatedMessage()}
        </div>
      </div>
    );
  }
}

export default Comments;
