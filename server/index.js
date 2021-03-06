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
app.use(function * catchAll(next) {
	try {
		yield next;
	} catch (err) {
		this.status = err.status || 500;

		this.body = 'internal server error';
		console.log('[handler error]:', chalk.bgRed(err));
	}
});

app.use(function * redirect(next) {
	const origin = this.origin;
	if (process.env.NODE_ENV === 'production' && !/shiweilin/.test(origin)) {
		this.redirect('http://shiweilin.cn');

		return;
	}

	yield next;
});

app.use(function * handleRequest(next) {
	if (this.path !== '/') {
		return yield next;
	}

	this.body = yield render('index', {
		year: '2016'
	});
});

app.use(function * catch404() {
	this.status = 404;
	this.body = yield render('404', {});
});

app.on('error', function (err) {
	console.log(chalk.bgRed(err));
});

module.exports = app;
