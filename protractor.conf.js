"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createFalse = require('typescript').createFalse;
var Reporter_1 = require("./src/config/Reporter");
var path = require('path');
var outputDir = path.join(process.cwd(), '/reports/json');
exports.config = {
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 36000,
        print: function () { }
    },
    specs: [
        '/home/sayali/Potractor_Assignment/Assignment_1/src/features/loginPage.feature',
    ],
    cucumberOpts: {
        require: [
            '/home/sayali/Potractor_Assignment/Assignment_1/src/step_def/loginTest.ts',
            '/home/sayali/Potractor_Assignment/Assignment_1/src/config/Reporter.ts',
        ],
        tags: false,
        strict: true,
        'dry-run': false,
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        profile: false,
        'no-source': true
    },
    onPrepare: function () {
        require("ts-node").register({
            project: require("path").join(__dirname, "./tsconfig.json"),
        });
        Reporter_1.Reporter.createDirectory(outputDir);
    },
    onComplete: function () {
        Reporter_1.Reporter.createHTMLReport();
    }
};
