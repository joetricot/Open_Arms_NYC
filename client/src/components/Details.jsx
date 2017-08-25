import React, { Component } from 'react';


class Details extends Component {
  render() {
    return (
      <div className="col-xs-12 col-md-8">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <h2 className="name">{this.props.data.name}</h2>
            <p className="address"><span>LOCATION: </span>{this.props.data.address}</p>
            {this.props.data.phone_number ? <p className="phone"> PHONE: {this.props.data.phone_number}</p> : ''}
          </div>
          <div className="col-xs-12 col-md-4">
            {this.props.data.neighborhood ? <p className="neigh">{this.props.data.neighborhood}</p> : ''}
            <div>
              {this.props.data.breakfast ? <p className="meal-time"><span className="meal-tag">BREAKFAST:</span> {this.props.data.breakfast}</p> : ''}
              {this.props.data.lunch ? <p className="meal-time"><span className="meal-tag">LUNCH:</span> {this.props.data.lunch}</p> : ''}
              {this.props.data.dinner ? <p className="meal-time"><span className="meal-tag">DINNER:</span> {this.props.data.dinner}</p> : ''}
              {this.props.data.hours ? <p className="hours">hours: {this.props.data.hours}</p> : ''}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10">
            <p className="description">DESCRIPTION</p>
            <p className="desc-text">{this.props.data.description || ""}</p>
            {this.props.data.website ? <a className="website-link" href={this.props.data.website}>WEBSITE</a> : ''}
          </div>
        </div>
        <hr />
      </div>

        )
    }
}

export default Details;