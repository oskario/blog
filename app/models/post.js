'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    subtitle: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    permalink: String,
    body: String
});

//ArticleSchema.virtual('date')
//    .get(function () {
//        return this._id.getTimestamp();
//    });

module.exports = mongoose.model('Post', PostSchema);