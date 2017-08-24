import React, { Component } from 'react';
import {
	Map, 
	Marker, 
	Popup, 
	TileLayer,
} from 'react-leaflet';

import axios from 'axios';
import { Icon } from 'leaflet';

import foodPin from '../food-pin.svg';

const foodIcon = new Icon({
	iconUrl: foodPin,
	iconSize: [35,95],
	iconAnchor: [22,94],
	popupAnchor: [-3,-76],
});


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
			currentLocation: null,
			currentRating: null,
		}

		this.createHomebasePopup = this.createHomebasePopup.bind(this);
		this.createDropinPopup = this.createDropinPopup.bind(this);
		this.createMealPopup = this.createMealPopup.bind(this);
		this.getDropInCenters = this.getDropInCenters.bind(this);
		this.getHomebaseCenters = this.getHomebaseCenters.bind(this);
		this.getMeals = this.getMeals.bind(this);
		this.getShelter = this.getShelter.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
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

	getShelter() {
		this.getDropInCenters();
		this.getHomebaseCenters();
	}

	getMeals() {
		if (this.state.mealDataLoaded) {
			this.setState({
				mealLocations: null,
				mealDataLoaded: false,
			});
		} else {
			let meals = [];
			for (let i=1;i<112;i++) {
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
			<Marker position={[homebase.lat,homebase.lng]} key={homebase.id} 
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
			<Marker position={[meal.lat,meal.lng]} icon={foodIcon} key={meal.id}
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

	handleFilterChange(e) {
		if (e.target.value === 'shelter') {
			this.getShelter();
		} else if (e.target.value === 'meals') {
			this.getMeals();
		}
	}

	render() {
		return(
			<div>
				<div id='map-filters'>
					<span>Services</span>
					<select name="filter" onChange={this.handleFilterChange}>
						<option value="meals">Free Meals</option>
						<option value="shelter">Shelters</option>
					</select>
					
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

/* 
<button onClick={this.getMeals} 
					className={this.state.mealDataLoaded ? 'selected' : ''}>Free Meals</button>
					<button onClick={this.getShelter} 
					className={this.state.homebaseDataLoaded ? 'selected' : ''}>Shelter</button>
*/

export default MyMap;