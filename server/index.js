'use strict';

const fs = require('fs');
const koa = require('koa');
const app = new koa();
const reply = fs.readFileSync('./client/index.html', 'utf8');

app.use(ctx => {
	ctx.body = reply;
});

app.listen(80, err => {
	if (err) {
		throw err;
	}

	console.log('server is running');
});
