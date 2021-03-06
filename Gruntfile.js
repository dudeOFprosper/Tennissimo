module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                   "css/base.css": "less/base.less" // destination file and source file
                }
            }
        },
        watch: {
            express: {
                files:  [ '**/*.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }, 
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        express: {
            options: {
              // Override defaults here
            },
            dev: {
              options: {
                script: 'server.js'
              }
            },
            prod: {
              options: {
                script: 'server.js',
                node_env: 'production'
              }
            },
            test: {
              options: {
                script: 'server.js'
              }
            }
        }
    });
    grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('default', [ 'express:dev', 'watch', 'less']);
};