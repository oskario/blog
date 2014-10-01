'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    subtitle: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    body: String
});

module.exports = mongoose.model('Post', PostSchema);