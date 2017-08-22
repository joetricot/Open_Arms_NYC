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
			position: [40.7831,-73.9712],
			homebaseLocations: null,
			homebaseDataLoaded: false,
			dropinLocations: null,
			dropinDataLoaded: false,
		}
		this.createHomebasePopup = this.createHomebasePopup.bind(this);
		this.getDropInCenters = this.getDropInCenters.bind(this);
		this.getHomebaseCenters = this.getHomebaseCenters.bind(this);
	}

	componentDidMount() {
		console.log('did mount');
		//this.getDropInCenters();
	}

	getHomebaseCenters() {
		axios.get('/homebase')
			.then(res => {
				console.log(res.data.data)
				this.setState({
					homebaseLocations: res.data.data,
					homebaseDataLoaded: true,
				})
		}).catch(err => console.log(err));
	}

	getDropInCenters() {
		console.log('getDropInCenters')
		let dropins = []
		for (let i=0; i< 2; i++) {
			axios.get('/dropins/' + i)
			.then(res => {
				console.log(res.data.data)
				dropins.push(res.data.data);
			}).catch(err => console.log(err));
		}

		if (dropins.length) {
			this.setState({
				dropinLocations: dropins,
				dropinDataLoaded: true,
			})
		}
	}

	createHomebasePopup(homebase) {
		return (
			<Marker position={[homebase.latitude,homebase.longitude]} className='homebase' 
			key={homebase.bin} >
				<Popup>
					<div>
					<h5>Homebase</h5>
					<span>{homebase.address}</span>
					</div>
				</Popup>
			</Marker>
		)
	}

	createDropinPopup(dropin) {
		console.log(dropin);
		return (
			<Marker position={[dropin.lat,dropin.lng]} className='dropin'>
				<Popup>
					<div>
					<h5>Drop-in Center</h5>
					<span>{dropin.name}</span>
					</div>
				</Popup>
			</Marker>
		)
	} 

	render() {
		return(
			<div>
				<div id='map-filters'>
					<button>Free Meals</button>
					<button onClick={this.getHomebaseCenters}>Homebases</button>
					<button onClick={this.getDropInCenters}>Dropin Centers</button>
				</div>
				<Map center={this.state.position} zoom={13} id='map'>
					<TileLayer  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
					{this.state.homebaseDataLoaded ? this.state.homebaseLocations.map(this.createHomebasePopup) : ''}
					{this.state.dropinDataLoaded ? this.state.dropinLocations.map(this.createDropinPopup) : ''}
				</Map>
			</div>
		)
	}
}

export default MyMap;