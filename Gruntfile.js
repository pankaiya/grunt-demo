module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      compile: {
        files: {
                    'css/compiled.css': 'less/*.less'
            
        }
                     
      }
                       
    }
            
  });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:compile']);

};

