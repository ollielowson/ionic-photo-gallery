module.exports = function (config) {
    config.set({
        reporters: ['progress', 'junit'],
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        junitReporter: {
            outputDir: '_results'
        },
        files: [
            'www/scripts/js/**/*.js',
            'test/**/*js'
        ]
    });
};
