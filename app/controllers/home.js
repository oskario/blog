var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    Post.find(function (err, articles) {
        if (err) return next(err);
        res.render('index', {
            title: 'Generator-Express MVC',
            articles: articles
        });
    });
});
