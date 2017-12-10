/**
 * @author: @AngularClass
 */

module.exports = function(config) {
  var testWebpackConfig = require('./webpack.test.js')({env: 'test'});

  var configuration = {

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    /*
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [ ],

    /*
     * list of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [ { pattern: './config/spec-bundle.js', watched: false } ],
    preprocessors: {
      './config/spec-bundle.js': ['webpack']
    },

    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    // preprocessors: {
    //   '**/*.html':["ng-html2js"],
    //   './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
    // },
    //
    // ngHtml2JsPreprocessor: {
    //   // strip this from the file path
    //   stripPrefix: '',
    //   stripSuffix: '.html',
    //   // prepend this to the
    //   prependPrefix: '',
    //   angular: 2,
    //
    //   // or define a custom transform function
    //   // - cacheId returned is used to load template
    //   //   module(cacheId) will return template at filepath
    //   cacheIdFromPath: function(filepath) {
    //     // example strips 'public/' from anywhere in the path
    //     // module(app/templates/template.html) => app/public/templates/template.html
    //     var cacheId = filepath.strip('app/app/', '');
    //     return cacheId;
    //   },
    //
    //   // - setting this option will create only a single module that contains templates
    //   //   from all the files, so you can load them all with module('foo')
    //   // - you may provide a function(htmlPath, originalPath) instead of a string
    //   //   if you'd like to generate modules dynamically
    //   //   htmlPath is a originalPath stripped and/or prepended
    //   //   with all provided suffixes and prefixes
    //   moduleName: 'foo'
    // },

    // Webpack Config at ./webpack.test.js
    webpack: testWebpackConfig,

    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: { stats: 'errors-only'},

    /*
     * test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: [ 'mocha', 'coverage', 'remap-coverage' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    /*
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'Chrome'
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    /*
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: true
  };

  if (process.env.TRAVIS){
    configuration.browsers = [
      'ChromeTravisCi'
    ];
  }

  config.set(configuration);
};
