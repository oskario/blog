'use strict';

var express = require('express');
var controller = require('./post.controller.js');

var router = express.Router();

router.get('/all', controller.index);
router.get('/:id', controller.findById);
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

module.exports = router;