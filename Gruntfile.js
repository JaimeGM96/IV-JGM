module.exports = function(grunt) {
    grunt.registerTask("check", function () {
        "tsc --noEmit src/*.ts";
    });

    grunt.registerTask("install", function () {
        "yarn install";
    });
}