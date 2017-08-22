import React, { Component } from 'react';
//import L from 'leaflet';
import {
	Map, 
	Marker, 
	Popup, 
	TileLayer 
} from 'react-leaflet';

//lat and long
const position = [40.7831,-73.9712]

class MyMap extends Component {
	render() {
		return(
			<Map center={position} zoom={13} id='map'>
				<TileLayer  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
				<Marker position={position}>
					<Popup>
						<span>Haii</span>
					</Popup>
				</Marker>
			</Map>
		)
	}
}

export default MyMap;