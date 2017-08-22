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
			filter: 'homebase'
		}
		this.createHomebasePopup = this.createHomebasePopup.bind(this);
		this.getDropInCenters = this.getDropInCenters.bind(this);
		this.getHomebaseCenters = this.getHomebaseCenters.bind(this);
		//this.selectFilter = this.selectFilter.bind(this);
		//this.renderFilter = this.,
	}

	componentDidMount() {
		console.log('did mount');
		//this.getDropInCenters();
	}

	getHomebaseCenters() {
		//toggle filter
		if (this.state.homebaseDataLoaded) {
			this.setState({
					homebaseLocations: null,
					homebaseDataLoaded: false,
			});
		} else {
			axios.get('/homebase')
			.then(res => {
				console.log(res.data.data)
				this.setState({
					homebaseLocations: res.data.data,
					homebaseDataLoaded: true,
				})
			}).catch(err => console.log(err));
		}
	}

	getDropInCenters() {
		//toggle filter 
		if (this.state.dropinDataLoaded) {
			this.setState({
					dropinLocations: null,
					dropinDataLoaded: false,
			});
		} else {
			let dropins = []
			for (let i=0; i< 2; i++) {
				axios.get('/dropins/' + i)
				.then(res => {
					console.log(res.data.data)
					dropins.push(res.data.data);
					this.setState({
						dropinLocations : dropins,
						dropinDataLoaded: true,
					})
				}).catch(err => console.log(err));
			}
		}
		
	}

	createHomebasePopup(homebase) {
		return (
			<Marker position={[homebase.latitude,homebase.longitude]} key={homebase.bin} >
				<Popup className='homebase'>
					<div>
					<h5>Homebase</h5>
					<span>{homebase.address}</span>
					</div>
				</Popup>
			</Marker>
		)
	}

	createDropinPopup(dropin) {
		return (
			<Marker position={[dropin.lat,dropin.lng]}>
				<Popup className='dropin'>
					<div>
					<h5>Drop-in Center</h5>
					<p>{dropin.name}</p>
					<p>{dropin.address}</p>
					</div>
				</Popup>
			</Marker>
		)
	} 

/*
					<span>Filter</span>

					<select onChange={this.selectFilter} />
						<option value='dropins'>drop in centers</option>
						<option value='homebase'>homebase</option>
						<option value='meals'>free meals</option>
					</select>
*/

	render() {
		return(
			<div>
				<div id='map-filters'>
					<button>Free Meals</button>
					<button onClick={this.getHomebaseCenters} 
					className={this.state.homebaseDataLoaded ? 'selected' : ''}>Homebases</button>
					<button onClick={this.getDropInCenters}
					className={this.state.dropinDataLoaded ? 'selected' : ''}>Dropin Centers</button>


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