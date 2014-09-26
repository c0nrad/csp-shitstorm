'use strict';

var request = require('request');
var fs = require('fs');

exports.randomUserAgent = function() {
  var userAgents = [
		'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.77.4 (KHTML, like Gecko) Version/7.0.5 Safari/537.77.4',
		'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0',
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
		'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36'
  ];

  return userAgents[Math.floor(Math.random()*userAgents.length)];
};

var reports = fs.readFileSync('reports.dump','utf8').split('\n');
exports.randomReport = function() {
  return reports[Math.floor(Math.random()*reports.length)];
};

exports.sendReport = function(endpoint, report) {
  var options = {
    method: 'POST',
    url: endpoint,
    headers: {
      'Content-Type': 'application/csp-report'
    },
    body: report
  };

  request(options, function() {

  });
};

exports.shitstorm = function(endpoint, timeout) {
  setInterval(function() {

    var report = exports.randomReport();
    process.stdout.write('.');
    exports.sendReport(endpoint, report);
  }, timeout);
};

exports.shitstorm('http://localhost:3000', 10);
