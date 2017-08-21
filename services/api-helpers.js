require('isomorphic-fetch');

function getDropInCenters(req,res,next) {
	fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
	.then(res => res.json())
	.then(jsonRes => {
		console.log(jsonRes);
		res.locals.data = jsonRes.filter(result => result.borough === 'Manhattan');
		next();
	}).catch(err => {
		console.log(err);
		next();
	});
}

function getCareerPrograms(req,res,next) {
	fetch('https://data.cityofnewyork.us/resource/cd3s-tv9g.json')
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
	getDropInCenters : getDropInCenters,
	getCareerPrograms: getCareerPrograms
};
