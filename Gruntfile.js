module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            temp: ['.grunt']
        },
        less: {
            test: {
                files: {
                    '.grunt/less/validate.css': 'src/less/index.less'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: ['Gruntfile.js']
        },
        release: {
            options: {
                file: 'bower.json'
            }
        },
        watch: {
            less: {
                files: 'src/less/*.less',
                tasks: ['clean', 'less']
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask('test', ['jshint', 'less']);
};
