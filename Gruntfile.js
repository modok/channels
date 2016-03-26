module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        dist: {
            src: ['public/javascripts/src/**/*.js'],
            dest: 'public/javascripts/dist/<%= pkg.name %>-angular.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

};