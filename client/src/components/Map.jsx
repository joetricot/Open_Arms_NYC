import React, { Component } from 'react';
import {
	Map, 
	Marker, 
	Popup, 
	TileLayer 
} from 'react-leaflet';

import axios from 'axios';
import Comments from './Comments';
import Details from './Details';

class MyMap extends Component {
	constructor() {
		super();
		this.state = {
			position: [40.7831,-73.9712],
			homebaseLocations: null,
			homebaseDataLoaded: false,
			dropinLocations: null,
			dropinDataLoaded: false,
			mealLocations: null,
			mealDataLoaded: false,
			filter: 'homebase',
			currentLocation: null,
			currentRating: null,
		}

		this.createHomebasePopup = this.createHomebasePopup.bind(this);
		this.createDropinPopup = this.createDropinPopup.bind(this);
		this.createMealPopup = this.createMealPopup.bind(this);
		this.getDropInCenters = this.getDropInCenters.bind(this);
		this.getHomebaseCenters = this.getHomebaseCenters.bind(this);
		this.getMeals = this.getMeals.bind(this);
	}

	componentDidMount() {
		console.log('did mount');
	}

	getHomebaseCenters() {
		//toggle filter
		if (this.state.homebaseDataLoaded) {
			this.setState({
					homebaseLocations: null,
					homebaseDataLoaded: false,
			});
		} else {
			let homebases = [];
			for (let i=0; i<2; i++) {
				axios.get('/homebase/' + i)
				.then(res => {
					homebases.push(res.data.data);
					this.setState({
						homebaseLocations: homebases,
						homebaseDataLoaded: true,
					})
				}).catch(err => console.log(err));
			}
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
					dropins.push(res.data.data);
					this.setState({
						dropinLocations: dropins,
						dropinDataLoaded: true,
					});
				}).catch(err => console.log(err));
			}
		}
	}

	getMeals() {
		if (this.state.mealDataLoaded) {
			this.setState({
				mealLocations: null,
				mealDataLoaded: false,
			});
		} else {
			let meals = [];
			for (let i=0;i<112;i++) {
				axios.get('/meals/' + i)
				.then(res => {
					meals.push(res.data.data);
					this.setState({
						mealLocations: meals,
						mealDataLoaded: true,
					});
				}).catch(err => console.log(err));
			}
		}
	}

	createHomebasePopup(homebase) {
		return (
			<Marker position={[homebase.lat,homebase.lng]} key={homebase.bin} 
			onClick={() => this.props.selectLocation(`/homebase/${homebase.id}`)}>
				<Popup className='homebase'>
					<div>
					<h5>Homebase</h5>
					<p>{homebase.address}</p>
					</div>
				</Popup>
			</Marker>
		)
	}

	createDropinPopup(dropin) {
		return (
			<Marker position={[dropin.lat,dropin.lng]} key={dropin.id}
			onClick={() => this.props.selectLocation(`/dropins/${dropin.id}`)}>
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

	createMealPopup(meal) {
		return (
			<Marker position={[meal.lat,meal.lng]} key={meal.id}
			onClick={() => this.props.selectLocation(`/meals/${meal.id}`)}>
				<Popup className='meal'>
					<div>
					<h5>Free Meal</h5>
					<p>{meal.name}</p>
					<p>{meal.address}</p>
					</div>
				</Popup>
			</Marker>
		)
	}

	render() {
		return(
			<div>
				<div id='map-filters'>
					<button onClick={this.getMeals} 
					className={this.state.mealDataLoaded ? 'selected' : ''}>Free Meals</button>
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
					{this.state.mealDataLoaded ? this.state.mealLocations.map(this.createMealPopup) : ''}
				</Map>
			</div>
		)
	}
}

export default MyMap;