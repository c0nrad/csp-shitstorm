#!/usr/bin/env node

'use strict';

var shitstorm = require('../index');

var opts = require('nomnom')
  .option('url', {
    default: 'http://localhost:3000',
    help: 'The url of the endpoint to send reports'
  })
  .option('delay', {
    default: 100,
    help: 'Number of miliseconds to wait between sending reports'
}).parse();

console.log('IMA FIRING MAH SHITSTORM', opts.url, opts.delay+'ms');
shitstorm.shitstorm(opts.url, opts.delay);
