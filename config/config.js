var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'blog'
        },
        port: 3000,
        db: 'mongodb://localhost/blog-development'

    },

    test: {
        root: rootPath,
        app: {
            name: 'blog'
        },
        port: 3000,
        db: 'mongodb://localhost/blog-development'

    },

    production: {
        root: rootPath,
        app: {
            name: 'blog'
        },
        port: 3000,
        db: 'mongodb://localhost/blog'

    }
};

module.exports = config[env];
