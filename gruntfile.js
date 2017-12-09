module.exports = function(grunt){
    grunt.initConfig({
        imagemin: {
            dynamic: {
                file: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
    
};