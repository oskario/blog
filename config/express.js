var express = require('express');
var glob = require('glob');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');

module.exports = function (app, config) {
    // Populate sample data
    if (config.debug) {
        require('./dummyData');
    }

    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');

    // app.use(favicon(config.root + '/public/img/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(compress());

    app.use(function (req, res, next) {
        // Get rid of '/public'
        var publicDir = '/public';
        if (req.url.length > publicDir.length &&
            req.url.substr(0, publicDir.length) === publicDir) {
            req.url = req.url.substr(publicDir.length);
        }
        next();
    });

    app.use(express.static(config.root + '/public'));

    if (config.debug) {
        app.use(express.static(config.root + '/.tmp'));
    }

    app.use(methodOverride());

    var controllers = glob.sync(config.root + '/app/controllers/*.js');
    controllers.forEach(function (controller) {
        require(controller)(app);
    });

    app.use(function (req, res, next) {
        var err = new Error('Not Found: ' + req.url);
        err.status = 404;
        next(err);
    });

    if (app.get('env') === 'development') {
        app.use(function (err, req, res) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err,
                title: 'error'
            });
        });
    }

    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
            title: 'error'
        });
    });

};
