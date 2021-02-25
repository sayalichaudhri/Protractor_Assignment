"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporter = void 0;
var fs = __importStar(require("fs"));
var mkdirp = require("mkdirp");
var path = require('path');
var reporter = require('cucumber-html-reporter');
var jsonReports = path.join(process.cwd(), "/reports/json");
var htmlReports = path.join(process.cwd(), "/reports/html");
var targetJson = path.join(jsonReports + "/cucumber_report.json");
var cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    theme: "bootstrap",
    metadata: {
        "App Name": "Dilips Oak's Academy login",
        "Platform": "Linux os"
    }
};
var Reporter = (function () {
    function Reporter() {
    }
    Reporter.createDirectory = function (dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    };
    Reporter.createHTMLReport = function () {
        try {
            reporter.generate(cucumberReporterOptions);
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file." + err);
            }
        }
    };
    return Reporter;
}());
exports.Reporter = Reporter;
