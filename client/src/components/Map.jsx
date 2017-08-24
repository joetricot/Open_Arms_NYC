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
		this.renderLoading = this.renderLoading.bind(this);
		this.renderMeals = this.renderMeals.bind(this);
	}

	componentDidMount() {
		console.log('map did mount');
		this.getMeals();
	}

	getHomebaseCenters() {
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

	getDropInCenters() {
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

	getShelter() {
		this.setState({
			mealDataLoaded: false,
		});
		this.getDropInCenters();
		this.getHomebaseCenters();
	}

	getMeals() {
		this.setState({
				homebaseDataLoaded: false,
				dropinDataLoaded: false,
			});
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

	renderLoading() {
		return(
			<div id='loading'>
				<h1><i className="fa fa fa-circle-o-notch fa-spin fa-3x" aria-hidden="true"></i></h1>
				<h5>loading data</h5>
			</div>
		)
	}

	renderMeals() {
		if (this.state.mealLocations.length < 100) {
			console.log('loading')
			return this.renderLoading();
		} else {
			return this.state.mealLocations.map(this.createMealPopup);
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
				<Map center={this.state.position} zoom={14} id='map'>
					<TileLayer  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
					{this.state.homebaseDataLoaded ? this.state.homebaseLocations.map(this.createHomebasePopup) : ''}
					{this.state.dropinDataLoaded ? this.state.dropinLocations.map(this.createDropinPopup) : ''}
					{this.state.mealDataLoaded ? this.renderMeals() : ''}
				</Map>
			</div>
		)
	}
}

export default MyMap;
