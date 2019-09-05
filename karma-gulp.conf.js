process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        preprocessors: {
            './src/test.ts': ['webpack']
        },
        plugins: [
            require('karma-webpack')
        ],
        reporters: ['progress', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity
    })
};
