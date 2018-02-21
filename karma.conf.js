var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'src/**/__test__/**/*.js',
        ],

        preprocessors: {
            'src/**/__test__/**/*.js': ['webpack'],
        },

        reporters: ["spec"],

        specReporter: {
            maxLogLines: 5,             // limit number of lines logged per test
            suppressErrorSummary: true, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: true,      // do not print information about skipped tests
            showSpecTiming: false,      // print the time elapsed for each spec
            failFast: true              // test would finish with error when a first fail occurs.
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],

        port: 9876,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: config.autoWatch,

        browsers: ['PhantomJS'],

        singleRun: config.singleRun,

        browserNoActivityTimeout: 100000,

        concurrency: Infinity,

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        }
    });
};