'use strict';

const views = require('co-views');

const render = views('views', {
  map: { html: 'dust' }
});

module.exports = render;