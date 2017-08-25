import React, { Component } from 'react';
import {
	Map, 
	Marker, 
	Popup, 
	TileLayer,
} from 'react-leaflet';

import axios from 'axios';
import { Icon } from 'leaflet';

import foodPin from '../meal-pin.svg'; 

import shelterPin from '../shelter-pin.svg';


const foodIcon = new Icon({
	iconUrl: foodPin,
	iconSize: [40,48],
	iconAnchor: [20,48],
	popupAnchor: [-3,-76],
});

const shelterIcon = new Icon({
	iconUrl: shelterPin,
	iconSize: [40,48],
	iconAnchor: [20,48],
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
			currentFilter: 'meals',
			allDataLoaded: false,
		}

		this.createHomebasePopup = this.createHomebasePopup.bind(this);
		this.createDropinPopup = this.createDropinPopup.bind(this);
		this.createMealPopup = this.createMealPopup.bind(this);
		
		this.getDropInCenters = this.getDropInCenters.bind(this);
		this.getHomebaseCenters = this.getHomebaseCenters.bind(this);
		this.getMeals = this.getMeals.bind(this);
		
		this.handleFilterChange = this.handleFilterChange.bind(this);
		
		this.renderLoading = this.renderLoading.bind(this);
		this.renderMeals = this.renderMeals.bind(this);
		this.renderHomebaseShelters = this.renderHomebaseShelters.bind(this);
		this.renderDropInShelters = this.renderDropInShelters.bind(this); 
		
		this.isDataLoaded = this.isDataLoaded.bind(this);
	}

	componentDidMount() {
		console.log('map did mount');
		this.getHomebaseCenters();
		this.getDropInCenters();
		this.getMeals();
	}

	//checks if all data is loaded
	isDataLoaded() {
		if (this.state.mealLocations && this.state.dropinLocations && this.state.homebaseLocations) {
			//only checks meals because it takes longest
			if (this.state.mealLocations.length === 111) {
				return true;
			}
		}
		return false;
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

	getMeals() {
		let meals = [];
		for (let i=1;i<112;i++) {
			axios.get('/meals/' + i)
			.then(res => {
				meals.push(res.data.data);
				this.setState({
					mealLocations: meals,
					mealDataLoaded: true,
				});
			}).catch(err => {
				console.log('/meals/' + i)
				console.log(err)
			});
		}
	}

	createHomebasePopup(homebase) {
		return (
			<Marker position={[homebase.lat,homebase.lng]} icon={shelterIcon} key={homebase.id} 
			onClick={() => this.props.selectLocation(`/homebase/${homebase.id}`)}>
				<Popup className='popup'>
					<div>
					<h5>Homebase</h5>
					<p>{homebase.address}</p>
					</div>
				</Popup>
			</Marker>
		)
	}

	createDropinPopup(dropin) {
		console.log(dropin);
		return (
			<Marker position={[dropin.lat,dropin.lng]} icon={shelterIcon} key={dropin.id}
			onClick={() => this.props.selectLocation(`/dropins/${dropin.id}`)}>
				<Popup className='popup'>
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
		if (meal) {
			return (
			<Marker position={[meal.lat,meal.lng]} icon={foodIcon} key={meal.id}
			onClick={() => this.props.selectLocation(`/meals/${meal.id}`)}>
				<Popup className='popup'>
					<div>
					<h5>{meal.name}</h5>
					<p>{meal.address}</p>
					</div>
				</Popup>
			</Marker>
		);
		}
		
	}

	handleFilterChange(e) {
		this.setState({
			currentFilter: e.target.value,
		});
	}

	renderLoading() {
		if (!this.isDataLoaded()) {
			return (
				<div id='loading'>
					<h1><i className="fa fa fa-circle-o-notch fa-spin fa-3x" aria-hidden="true"></i></h1>
					<h5>loading</h5>
				</div>
		)} 
		return;
	}

	renderMeals() {
		if (this.state.currentFilter === 'meals' && this.state.mealDataLoaded) {
			console.log('render meals')
			return this.state.mealLocations.map(this.createMealPopup);
		}
	}

	renderHomebaseShelters() {
		if (this.state.currentFilter === 'shelter' && this.state.homebaseDataLoaded) {
			return this.state.homebaseLocations.map(this.createHomebasePopup);
		} 
	}

	renderDropInShelters() {
		if (this.state.currentFilter === 'shelter' && this.dropinDataLoaded) {
			console.log('render dropin shelters');
			return this.state.dropinLocations.map(this.createDropinPopup);
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
					{this.renderLoading()}
					{this.renderMeals()}
					{this.renderDropInShelters()}
					{this.renderHomebaseShelters()}
				</Map>
			</div>
		)
	}
}

export default MyMap;