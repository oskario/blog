'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    tags: [String],
    date: { type: Date, default: Date.now },
    permalink: String,
    similar: [Schema.Types.ObjectId],
    image: String,
    body: String
});

PostSchema.pre('save', function (next) {
    if (!this.permalink || this.permalink.length == 0) {
        this.permalink = this.title.replace(/ /g, '_').substring(0, 10);
    }
    next();
});

module.exports = mongoose.model('Post', PostSchema);