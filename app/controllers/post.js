var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post');

module.exports = function (app) {
    app.use('/post', router);
};

router.get('/:permalink', function (req, res, next) {
    Post.findOne({ permalink: req.params.permalink }, function (err, post) {
        if (err) return next(err);
        if (!post) return postNotFound(res, req.params.permalink);
        res.render('post', {
            post: post
        });
    });
});

function postNotFound (res, permalink) {
    console.error("Error [404]: " + permalink);
    return res.send(404, "Srry, post not found.");
}

