'use strict';

const resolve = require('path').resolve;
const views = require('co-views');

const filepath = resolve(__dirname, '..', 'views');
const render = views(filepath, {
	map: {html: 'dust'}
});

module.exports = render;
