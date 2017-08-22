import React, { Component } from 'react';
import {
	Map, 
	Marker, 
	Popup, 
	TileLayer 
} from 'react-leaflet';

import axios from 'axios';


class MyMap extends Component {
	constructor() {
		super();
		this.state = {
			homebaseLocations: null,
			homebaseDataLoaded: false,
			position: [40.7831,-73.9712]
		}
		this.createHomebasePopup = this.createHomebasePopup.bind(this);
	}

	componentDidMount() {
		console.log('did mount');
		axios.get('/homebase')
		.then(res => {
			console.log(res.data.data)
			this.setState({
				homebaseLocations: res.data.data,
				homebaseDataLoaded: true,
			})
		}).catch(err => console.log(err));
	}

	createHomebasePopup(homebase) {
		console.log(homebase);
		return (
			<Marker position={[homebase.latitude,homebase.longitude]} className='homebase'>
				<Popup>
					<span>{homebase.address}</span>
				</Popup>
			</Marker>
		)
	}

	render() {
		return(
			<Map center={this.state.position} zoom={13} id='map'>
				<TileLayer  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
				{this.state.homebaseDataLoaded ? this.state.homebaseLocations.map(this.createHomebasePopup) : ''}
			</Map>
		)
	}
}

export default MyMap;