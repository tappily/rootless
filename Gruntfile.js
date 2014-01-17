module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        lesslint: {
            options: {
                formatters: [{
                    id: 'csslint-xml',
                    dest: 'report/lesslint.xml'
                }]
            },
            src: ['src/less/*.less']
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
                tasks: ['lesslint']
            }
        }
    });

    grunt.registerTask('default', ['clean', 'test']);
    grunt.registerTask('test', ['jshint', 'lesslint']);
};
