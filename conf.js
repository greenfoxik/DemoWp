'use strict';

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// const Allure = require('allure-commandline');

// this.runSuite = function(){
// 	switch(DOMAIN) {
// 		case 's1': 
// 			return [
// 				'./tests/store_spec.js',
// 			  ];
// 			break;
// 		case 's2':
// 			return [
//             './tests/store_spec.js',
// 			  ]; 
					
// 		default:
// 	}
// },
exports.config = {

    directConnect: true,

   // framework: 'jasmine',

       seleniumAddress: 'http//localhost:4444/wd/hub',

   //    allScriptsTimeout: 50100,

   framework: 'jasmine',
	jasmineNodeOpts: {
		showColors: true,
		print: function() {},
		defaultTimeoutInterval: 480000 //time for every IT = 8 min
	},
	allScriptsTimeout: 480000, 
	getPageTimeout: 60000,
	directConnect: true,

      suites: {

         specs: ['./tests/store_spec.js',
                 './tests/store2_spec.js',
                 './tests/store3_spec.js'
            ],

         },

     

     onPrepare() {
         browser.ignoreSynchronization = true;

         global.isAngularSite = function(flag) {
            browser.ingoneSynchronization = !flag;
         }
         jasmine.getEnv().addReporter(
            new SpecReporter({
              spec: {
                displayStacktrace: true,
              },
            })
         )
       
      },
      
      // allScriptsTimeout: 480000, 
      // getPageTimeout: 60000,
      // directConnect: true,

      capabilities: {
         'directConnect': true,
         'browserName': 'firefox',
         // 'browserName': 'chrome',
   //       chromeOptions: {
   //           args: ["--incognito"]
   //       }
      },



 };