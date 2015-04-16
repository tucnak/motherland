module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
      less: {
          cooking: {
            options: {
              "strictMath": true
            },

            files: {
              'lib/motherland.css': 'src/main.less'
            }
          }
      },

      cssmin: {
        options: {
          "strictMath": true
        },
        target: {
          files: {
            'lib/motherland.min.css': 'lib/motherland.css'
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

  grunt.registerTask('default', ['less', 'cssmin']);
  grunt.registerTask('dev', ['less', 'watch'])
}
