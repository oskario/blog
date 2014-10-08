'use strict';

var request = require('request');

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    var reloadPort = 35729, files;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        develop: {
            server: {
                file: 'app.js'
            }
        },
        watch: {
            options: {
                nospawn: true,
                livereload: reloadPort
            },
            js: {
                files: [
                    'app.js',
                    'app/**/*.js',
                    'config/*.js'
                ],
                tasks: ['develop']
            },
            views: {
                files: [
                    'app/views/*.jade',
                    'app/views/**/*.jade'
                ],
                options: { livereload: reloadPort }
            },
            sass: {
                files: [
                    'public/css/**/*.{scss,sass}'],
                tasks: ['sass', 'autoprefixer']
            },
            injectSass: {
                files: [
                    'public/css/**/*.{scss,sass}'
                ],
                tasks: ['injector:sass']
            }
        },
        sass: {
            server: {
                options: {
                    loadPath: [
                        'public'
                    ],
                    compass: false
                },
                files: {
                    '.tmp/css/app.css' : 'public/css/app.scss'
                }
            }
        }
    });

    grunt.config.requires('watch.js.files');
    files = grunt.config('watch.js.files');
    files = grunt.file.expand(files);

//    grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
//        var done = this.async();
//        setTimeout(function () {
//            request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','), function (err, res) {
//                var reloaded = !err && res.statusCode === 200;
//                if (reloaded)
//                    grunt.log.ok('Delayed live reload successful.');
//                else
//                    grunt.log.error('Unable to make a delayed live reload.');
//                done(reloaded);
//            });
//        }, 500);
//    });

    grunt.registerTask('serve', function (target) {
        if (target == 'dist') {
            return grunt.task.run(['develop', 'watch']);
        } else {
            return grunt.task.run(['develop', 'sass', 'watch']);
        }
    });
};
