require('isomorphic-fetch');
const API_KEY = process.env.API_KEY;

function getDropInCenters(req,res,next) {
	fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
	.then(res => res.json())
	.then(jsonRes => {
		//console.log(jsonRes);
		res.locals.data = jsonRes.filter(result => result.borough === 'Manhattan');
		next();
	}).catch(err => {
		console.log(err);
		next();
	});
}

function getHomebases(req,res,next) {
	fetch('https://data.cityofnewyork.us/resource/5ud2-iqje.json')
	.then(res => res.json())
	.then(jsonRes => {
		//console.log(jsonRes);
		res.locals.data = jsonRes.filter(result => result.borough === 'Manhattan');;
		next();
	}).catch(err => {
		console.log(err);
		next();
	});
}

module.exports = {
	getDropInCenters : getDropInCenters,
	getHomebases: getHomebases,
};
