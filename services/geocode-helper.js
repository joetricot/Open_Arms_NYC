require('isomorphic-fetch');
const API_KEY = process.env.API_KEY;

function convertToCoords(address) {
	let parsedAddress = address.split(' ').join('+');
	.fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + parsedAddress)
	.then(res => res.json())
	.then(jsonRes => {
		console.log(jsonRes);
		res.locals.data = jsonRes;
		next();
	}).catch(err => {
		console.log(err);
		next();
	});
}

module.exports = {
	convertToCoords : convertToCoords,
}