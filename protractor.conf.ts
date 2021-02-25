
const { createFalse } = require('typescript');
import { Reporter } from "./src/config/Reporter";


//added for reporter

let path = require('path');
var outputDir = path.join(process.cwd(), '/reports/json');


exports.config={

    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER:false,
 //   allScriptsTimeout: 10000,


 jasmineNodeOpts:{
  showColors : true,
  silent : true,
  defaultTimeoutInterval: 36000,
  print: function(){}
},
    specs: [
        '/home/sayali/Potractor_Assignment/Assignment_1/src/features/loginPage.feature',  // Specs here are the cucumber feature files
      ],


    cucumberOpts: {
    require: [
        '/home/sayali/Potractor_Assignment/Assignment_1/src/step_def/loginTest.ts',
        '/home/sayali/Potractor_Assignment/Assignment_1/src/config/Reporter.ts',
      ],  // require step definition files before executing features
      tags: false,                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
      'dry-run': false,              // <boolean> invoke formatters without executing steps
      compiler: "ts:ts-node/register",                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      
      
      //Added code for reports
      format:"json:./reports/json/cucumber_report.json",
      
      profile: false,
      'no-source': true
      
    },

      

    onPrepare: function () {

        require("ts-node").register({
          project: require("path").join(__dirname, "./tsconfig.json"), // Relative path of tsconfig.json file

       
      })

      //added for reporter
      Reporter.createDirectory(outputDir);



      },

      //added for reporter
      onComplete: () => {
        Reporter.createHTMLReport();


        //added cucumber multiple report plugin
    /*     plugins: [{
          package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
          options: {
              automaticallyGenerateReport: true,
              removeExistingJsonReportFile: true,
              openReportInBrowser: true,
              pageTitle: "Project Report",
              pageFooter: "<div><p>Protractor with cucumber</p></div>",
              customData: {
                  title: 'Protractor Cucucmber Report',
                  data: [
                      { label: 'Project', value: 'Protractor with Cucumber test' },
                      { label: 'Created By', value: 'sayali' }
                  ]
              }
          },
  
      }] */

      }
}