var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post');

var SIMILAR_POSTS_COUNT = 6;

module.exports = function (app) {
    app.use('/post', router);
};

router.get('/:permalink', function (req, res, next) {
    Post.findOne({ permalink: req.params.permalink }).lean().exec(function (err, post) {
        if (err) return next(err);
        if (!post) return postNotFound(res, req.params.permalink);

        getSimilarPosts(post, function (post) {
            return res.render('post', {
                post: post
            });
        });
    });
});

/**
 * Function gets post similar to the one given.
 *
 * For now it utilizes ```post.similar``` array and if it's not sufficient - fetches
 * post older than the given one.
 *
 * @param post post to fetch similar to
 * @param callback callback called after fetching done
 */
function getSimilarPosts (post, callback) {
    Post.find({
        '_id': { $in: post.similar}
    }).lean().exec(function (err, similar) {
        post.similar = similar;

        if (similar.length < SIMILAR_POSTS_COUNT) {
            Post.find({
//                'date': { '$lt': post.date }
            }).limit(SIMILAR_POSTS_COUNT - similar.length).lean().exec(function (err, older) {
                post.similar = post.similar.concat(older);
                callback(post);
            });
        } else {
            callback(post);
        }
    })
}

/**
 * Called when no post was found.
 *
 * @param res
 * @param permalink
 * @returns {*|send|send|HTMLElement|Transport|boolean}
 */
function postNotFound (res, permalink) {
    console.error("Error [404]: " + permalink);
    return res.send(404, "Srry, post not found.");
}

