import React, { Component } from 'react';


class Details extends Component {
  render() {
    return (
      <div className="details bg-warning col-sm-8">
        <h2 className="col-sm-8 pull-left">{this.props.data.name}</h2>
        <h3 className="col-sm-8 pull-left">{this.props.data.address}</h3>
        {this.props.data.neighborhood ? <h3>{this.props.data.neighborhood}</h3> : ''}
        {this.props.data.breakfast ? <h4>breakfast: {this.props.data.breakfast}</h4> : ''}
        {this.props.data.lunch ? <h4>lunch: {this.props.data.lunch}</h4> : ''}
        {this.props.data.dinner ? <h4>dinner: {this.props.data.dinner}</h4> : ''}
        {this.props.data.hours ? <h4>hours: {this.props.data.hours}</h4> : ''}
        <p className="col-sm-12">{this.props.data.description || ""}</p>
        {this.props.data.phone_number ? <h5>phone: {this.props.data.phone_number}</h5> : ''}
        {this.props.data.website ? <a target="_blank" href={this.props.data.website}>{this.props.data.name}'s Website</a> : ''}
      </div>

        )
    }
}

export default Details;
