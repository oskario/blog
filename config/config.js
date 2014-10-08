var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'blog'
        },
        ip: 'localhost',
        port: 9000,
        db: 'mongodb://localhost/blog',
        debug: true
    },

    production: {
        root: rootPath,
        app: {
            name: 'blog'
        },
        ip: 'localhost',
        port: 9000,
        db: 'mongodb://localhost/blog'
    }
};

module.exports = config[env];
