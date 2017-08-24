import React, { Component } from 'react';


class Details extends Component {
  render() {
    return (
      <div className="details bg-warning col-sm-8">
        <h2 className="col-sm-8 pull-left">{this.props.data.name}</h2>
        <h3 className="col-sm-8 pull-left">{this.props.data.address}</h3>
        <p className="col-sm-12">{this.props.data.description || ""}</p>
      </div>
        )
    }
}

export default Details;