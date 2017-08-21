//import dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

//initialize app
const app = express();

require('dotenv').config();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static('public'));

//set up port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

//adding routes
app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//routes for drop in centers
const dropInRoutes = require('./routes/dropin-routes');
app.use('/dropins',dropInRoutes);

//routes for job training programs
const jobRoutes = require('./routes/job-routes');
app.use('/careers',jobRoutes);

//routes for addresses - get lat and long
const addressRoutes = require('./routes/address-routes');
app.use('/address', addressRoutes);

//error handler
app.use('*', (req,res) => {
	res.status(400).json({
		message: 'Not found',
	})
});