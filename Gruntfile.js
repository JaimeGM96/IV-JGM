module.exports = function(grunt) {
    let shell = require('shelljs');

    grunt.registerTask("check", function () {
        shell.exec("tsc --noEmit src/*.ts");
    });

    grunt.registerTask("install", function () {
        shell.exec("yarn install");
    });
}