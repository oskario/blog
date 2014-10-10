var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/post', function (req, res, next) {

    Post.find(function (err, articles) {
        if (err) return next(err);
        res.render('post', {
            title: 'Generator-Express MVC',
            articles: articles
        });
    });
});
