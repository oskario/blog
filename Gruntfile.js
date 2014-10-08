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
            express: {
                files: [
                    'app/**/*.{js,json}'
                ],
                tasks: ['express:dev', 'wait'],
                options: {
                    livereload: true,
                    nospawn: true //Without this option specified express won't be reloaded
                }
            }
        },
        clean: {
            all: '.tmp/**/*.*'
        },
        sass: {
            server: {
                options: {
                    loadPath: [
                        'public'
                    ],
                    compass: false
                },
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: ['*.scss'],
                    dest: '.tmp/css',
                    ext: '.css'
                }]
            }
        },
        jadeUsemin: {
            scripts: {
                options: {
                    tasks: {
                        js: ['concat', 'uglify'],
                        css: ['concat', 'cssmin']
                    }
                },
                files: [
                    {
                        src: 'app/views/layout.jade',
                        dest: '.tmp/views/layout.jade'
                    }
                ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/',
                        src: '{,*/}*.css',
                        dest: '.tmp/'
                    }
                ]
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= express.options.port %>'
            }
        },
        express: {
            options: {
                port: process.env.PORT || 9000
            },
            dev: {
                options: {
                    script: 'app.js',
                    debug: true
                }
            },
            prod: {
                options: {
                    script: 'dist/app.js'
                }
            }
        }
    });

    grunt.config.requires('watch.js.files');
    files = grunt.config('watch.js.files');
    files = grunt.file.expand(files);

    grunt.registerTask('serve', function (target) {
        if (target == 'dist') {
            return grunt.task.run(['develop', 'watch']);
        } else {
            return grunt.task.run([
                'clean:all',
                'sass',
                'autoprefixer',
                'express:dev',
//                'jadeUsemin',
                'wait',
                'open',
                'watch'
            ]);
        }
    });
    grunt.registerTask('wait', function () {
        grunt.log.ok('Waiting for server reload...');

        var done = this.async();

        setTimeout(function () {
            grunt.log.writeln('Done waiting!');
            done();
        }, 1500);
    });


    grunt.registerTask('express-keepalive', 'Keep grunt running', function () {
        this.async();
    });
};
