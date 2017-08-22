require('isomorphic-fetch');
const API_KEY = process.env.API_KEY;

//Assumes address is formatted with '+' to separate words (i.e. '3186+Ninth+Avenue+Manhattan+NY')
function convertToCoords(req,res,next) {
	fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.address}&key=${API_KEY}`)
	.then(res => res.json())
	.then(jsonRes => {
		console.log(jsonRes);
		res.locals.data = jsonRes.results[0].geometry.location;
		next();
	}).catch(err => {
		console.log(err);
		next();
	});
}

module.exports = {
	convertToCoords : convertToCoords,
	addrToCoords: addrToCoords,
}