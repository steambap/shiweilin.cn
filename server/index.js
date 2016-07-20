'use strict';

const resolve = require('path').resolve;
const koa = require('koa');
const serve = require('koa-static');
const compress = require('koa-compress');
const logger = require('koa-logger');
const chalk = require('chalk');
const render = require('./render');

const app = koa();

app.use(logger());
app.use(compress({threshold: 512}));
app.use(serve(resolve(__dirname, '..', 'public')));
app.use(function *catchAll(next) {
	try {
		yield next;
	} catch (err) {
		this.status = err.status || 500;

		this.body = 'internal server error';
		console.log('[handler error]:', chalk.bgRed(err));
	}
});

app.use(function *handleRequest(next) {
	// if (this.path !== '/') {
	// 	return yield next;
	// }

	this.body = yield render('index', {
		jobTitle: '前端工程师',
		company: '橙子科技'
	});
});

app.on('error', function (err) {
	console.log(chalk.bgRed(err));
});

module.exports = app;
