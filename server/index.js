#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const koa = require('koa');
const app = new koa();
const reply = fs.readFileSync(path.resolve(__dirname, '../client/index.html'), 'utf8');

app.use(ctx => {
	ctx.body = reply;
});

app.listen(80, '0.0.0.0', err => {
	if (err) {
		throw err;
	}

	console.log('server is running');
});

app.on('error', function (err) {
	console.error(err);
});

