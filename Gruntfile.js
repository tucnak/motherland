module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
      less: {
          cooking: {
            options: {
              "strictMath": true
            },

            files: {
              'dist/motherland.css': 'src/main.less'
            }
          }
      },

      cssmin: {
        options: {
          "strictMath": true
        },
        target: {
          files: {
            'dist/motherland.min.css': 'dist/motherland.css'
          }
        }
      },

      watch: {
          scripts: {
            files: 'src/*.less',
            tasks: ['less']
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['less', 'cssmin']);
  grunt.registerTask('dev', ['less', 'watch'])
}
