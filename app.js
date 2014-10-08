'use strict';

var express = require('express'),
    config = require('./config/config'),
    glob = require('glob'),
    mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('Unable to connect to database at ' + config.db);
});

// Populate DB with sample data
if (config.seedDB) {
    require('./config/seed');
}

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
    require(model);
});

var app = express();
var server = require('http').createServer(app);
require('./config/express')(app, config);


server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

module.exports = app;