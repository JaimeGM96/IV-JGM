module.exports = function(grunt) {
    grunt.registerTask("check", function () {
        "tsc --noEmit src/*.ts";
    });
}