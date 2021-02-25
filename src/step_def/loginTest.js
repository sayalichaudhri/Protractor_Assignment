"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var loginpage_1 = require("../page-object/loginpage");
var Base_1 = require("./Base");
var chai_1 = require("chai");
var URL = require("/home/sayali/Potractor_Assignment/Assignment_1/src/test-data/configure.json");
var keyword = new Base_1.Base();
var page = new loginpage_1.loginpage();
var setDefaultTimeout = require('cucumber').setDefaultTimeout;
setDefaultTimeout(100 * 1000);
cucumber_1.Given('Chrome browser is open and hit the url', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            keyword.windowMaximize();
            keyword.waitForAngularPage();
            keyword.openBrowser(URL.PATH.url);
            return [2];
        });
    });
});
cucumber_1.Then('User Enter the {string}', function (username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, page.setUsername(username)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User Enter {string}', function (password) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, keyword.visibilityOf(page.pass)];
                case 1:
                    _a.sent();
                    return [4, page.setPassword(password)];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
});
cucumber_1.Then('User should be able to logged in', function () {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 4, , 5]);
                    return [4, keyword.elementToBeClickable(page.login)];
                case 1:
                    _c.sent();
                    return [4, page.clickOnLogin()
                            .then(function () { return (protractor_1.browser.sleep(5000)); })];
                case 2:
                    _c.sent();
                    _b = (_a = chai_1.expect("http://cbt.dilipoakacademy.com/dev/#/app/report/dashboard").to).equal;
                    return [4, protractor_1.browser.getCurrentUrl()];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    protractor_1.browser.sleep(3000);
                    return [3, 5];
                case 4:
                    error_1 = _c.sent();
                    console.log("Error is:   " + error_1);
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
});
