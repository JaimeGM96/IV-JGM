module.exports = function(grunt) {
    grunt.registerTask("check", function () {
        "yarn eslint .";
    });
}