// Karma configuration
// Generated on Fri Aug 11 2017 16:58:47 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'public/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        // 'public/vue_js/*.js',
        'test/index.js'

    ],


    // list of files to exclude
    exclude: [
    ],

      plugins:[
          'karma-jasmine',
          'karma-coverage',
          'karma-chrome-launcher',
      ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // 'public/vue_js/*.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

      reporters: ['progress'],

    // coverageReporter:{
    //     type:'html',
    //     dir:'coverage/'
    // },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
      webpack: {
          module: {
              loaders: [{
                  test: /\.js$/,
                  loader: 'babel',
                  exclude: /node_modules/,
                  query: {
                      presets: ['es2015'],
                      plugins: ['istanbul',
                                'karma-jasmine',
                                'karma-coverage']
                  }
              }]
          }
      }
  })
}
