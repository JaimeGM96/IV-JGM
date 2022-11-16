export default function (grunt) {
    // Project configuration.
    grunt.initConfig({
        eslint: {
            target: ['src/*.ts']
        }
    });

    grunt.registerTask("check", ['eslint']);
}