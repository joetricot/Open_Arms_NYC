const axios = require('axios');
const dropInHelper = {};

dropInHelper.getDropInCenters = () => {
	axios.get('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
	.then((res) => {
		//console.log(res.data)
		res.json({
			message: 'ok',
			data: res.data,
		})
	})
	.catch(err => console.log(err));
}

module.exports = dropInHelper;
