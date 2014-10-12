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
        dirs: {
            dist: 'dist',
            temp: '.tmp',
            public: 'public'
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
                    'config/*.js',
                    '<%= dirs.public %>/js/*.js'
                ],
                tasks: ['serve']
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
                    '<%= dirs.public %>/css/**/*.{scss,sass}'],
                tasks: ['sass', 'autoprefixer']
            },
            express: {
                files: [
                    'app/**/*.{js,json}'
                ],
                tasks: ['express:dev', 'wait'],
                options: {
                    livereload: true,
                    nospawn: true
                }
            }
        },
        clean: {
            all: {
                files: [{
                    dot: true,
                    src: [
                        '<%= dirs.temp %>',
                        '<%= dirs.dist %>'
                    ]
                }]
            },
            server: '.tmp/**/*.*'
        },
        copy: {
            dist: {
                files: [
                    { src: ['app/**'], dest: '<%= dirs.dist %>/' },
                    { src: ['config/**'], dest: '<%= dirs.dist %>/' },
                    { expand: true, src: ['<%= dirs.public %>/', '!*.scss'], dest: '<%= dirs.dist %>'},
                    { src: 'app.js', dest: '<%= dirs.dist %>/app.js' },
                    { src: '<%= dirs.components =>/jquery/', dest: '<%= dirs.dist %>/app.js' },
                    { src: 'package.json', dest: '<%= dirs.dist %>/' }
                ]
            }
        },
        sass: {
            server: {
                options: {
                    loadPath: [
                        '<%= dirs.public %>'
                    ],
                    compass: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.public %>/css',
                    src: ['*.scss'],
                    dest: '<%= dirs.temp %>/css',
                    ext: '.css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    src: ['<%= dirs.public %>/css/**/*.scss'],
                    dest: '<%= dirs.dist %>',
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
                        src: '<%= dirs.dist %>/app/views/layout.jade'
//                        src: 'app/views/layout.jade',
//                        dest: '<%= dirs.dist %>/views/layout.jade'
                    }
                ]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= dirs.dist %>/',
                        src: '{,*/}*.css',
                        dest: '<%= dirs.dist %>/'
                    }
                ]
            },
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= dirs.temp %>/',
                        src: '{,*/}*.css',
                        dest: '<%= dirs.temp %>/'
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
                    script: '<%= dirs.dist %>/app.js'
                }
            }
        },
        wiredep: {
            target: {
                src: [
                    'app/**/*.jade',
                    '<%= dirs.dist %>/**/*.jade'
                ]
            }
        }
    });

    grunt.config.requires('watch.js.files');
    files = grunt.config('watch.js.files');
    files = grunt.file.expand(files);

    grunt.registerTask('serve', function (target) {
        if (target == 'dist') {
            return grunt.task.run([
                'build',
                'express:prod',
                'wait',
                'open',
                'watch'
            ]);
        } else {
            return grunt.task.run([
                'clean:server',
                'sass',
                'wiredep',
                'autoprefixer:dev',
                'express:dev',
                'wait',
//                'open'
                'watch'
            ]);
        }
    });

    grunt.registerTask('build', function () {
        return grunt.task.run([
            'clean:all',
            'copy:dist',
            'sass:dist',
            'wiredep',
            'autoprefixer:prod',
//            'jadeUsemin'
        ]);
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
