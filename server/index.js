'use strict';

const koa = require('koa');
const serve = require('koa-serve-static');
const compress = require('koa-compress');
const logger = require('koa-logger');

const app = new koa();

app.use(logger());
app.use(compress({threshold: 512}));
app.use(serve('public'));

app.on('error', function (err) {
	console.error(err);
});

module.exports = app;
