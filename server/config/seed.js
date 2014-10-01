/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Post = require('../api/post/post.model.js');

Post.find({}).remove(function() {
  Post.create({
      title: "This is an example post #1",
      subtitle: "Subtitle",
      author: "anonymouse",
      tags: ["car", "food"],
      body: "This is the body of an example post"
  });
});