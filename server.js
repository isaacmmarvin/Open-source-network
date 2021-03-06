const express = require('express');
const config = require('./server/configure');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_LOCAL;
app.set('port', process.env.PORT || 3000);
app.set('Views', `${__dirname}/Views`);

mongoose
	.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
	.then(() => console.log('successfully connected to db'))
	.catch((error) => console.log('there was an error connecting to db ', error));

const server = app.listen(app.get('port'), () => {
	console.log(`Server up: http://localhost:${app.get('port')}`);
});
