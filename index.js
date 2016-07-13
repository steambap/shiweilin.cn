#!/usr/bin/env node

const app = require('./server');

app.listen(80, err => {
	if (err) {
		throw new Error(err.message);
	}

	console.log('server is running');
});
