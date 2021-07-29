'use strict';

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {

   directConnect: true,

   framework: 'jasmine',

      seleniumAddress: 'http//localhost:4444/wd/hub',

      specs: ['./tests/store_spec.js'],

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

      capabilities: {
         browserName:'chrome'
         },



 };