module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    "public/styles.css": "styles/css/index.css",
                },
            },
        },
        watch: {
            styles: {
                files: ["styles/css/index.css"],
                tasks: ["autoprefixer"],
            },
        },
    });
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
