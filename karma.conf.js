module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'bower_components/angular/angular.js',
      'https://npmcdn.com/@angular/router@0.2.0/angular1/angular_1_router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app/*.js',
      'app/personal-details/*.js',
      'app/confirmation/*.js',
      'app/shared/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
