'use strict';

var _ = require('lodash');
var Post = require('./post.model.js');

/**
 * Gets list of all posts.
 */
exports.index = function (req, res) {
    Post.find(function (err, posts) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, posts);
    });
};

/**
 * Gets post by id.
 */
exports.findById = function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (err) {
            return handleError(res, err);
        }
        if (!post) {
            return res.send(404);
        }
        return res.json(post);
    });
};

/**
 * Creates new post from request body and puts it into the DB.
 * Responses with newly created post if operation suceeds.
 */
exports.create = function (req, res) {
    Post.create(req.body, function (err, post) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, post);
    });
};
//
//// Updates an existing thing in the DB.
//exports.update = function (req, res) {
//    if (req.body._id) {
//        delete req.body._id;
//    }
//    Thing.findById(req.params.id, function (err, thing) {
//        if (err) {
//            return handleError(res, err);
//        }
//        if (!thing) {
//            return res.send(404);
//        }
//        var updated = _.merge(thing, req.body);
//        updated.save(function (err) {
//            if (err) {
//                return handleError(res, err);
//            }
//            return res.json(200, thing);
//        });
//    });
//};
//
//// Deletes a thing from the DB.
//exports.destroy = function (req, res) {
//    Thing.findById(req.params.id, function (err, thing) {
//        if (err) {
//            return handleError(res, err);
//        }
//        if (!thing) {
//            return res.send(404);
//        }
//        thing.remove(function (err) {
//            if (err) {
//                return handleError(res, err);
//            }
//            return res.send(204);
//        });
//    });
//};

function handleError(res, err) {
    console.error("Error [500]: " + err);
    return res.send(500, err);
}