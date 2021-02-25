import { Given, Then } from "cucumber";
import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { loginpage } from "../page-object/loginpage";
import { Base } from "./Base";
import { expect } from "chai";



var URL = require("/home/sayali/Potractor_Assignment/Assignment_1/src/test-data/configure.json");
const keyword = new Base();
const page = new loginpage();

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(100 * 1000);

Given('Chrome browser is open and hit the url', async function () {


   keyword.windowMaximize();
   keyword.waitForAngularPage();
   keyword.openBrowser(URL.PATH.url);

});


Then('User Enter the {string}', async function (username) {

   // await keyword.visibilityOf(page.uname);
   //  await browser.sleep(10000);

   await page.setUsername(username);


   //  var uname=element(by.id('mat-input-0'));

   //  uname.sendKeys(username);

});

Then('User Enter {string}', async function (password) {

   await keyword.visibilityOf(page.pass);
   await page.setPassword(password);

   //   browser.sleep(5000);

});

Then('User should be able to logged in', async function () {
   try {
      await keyword.elementToBeClickable(page.login);
      await page.clickOnLogin()
         .then(() => (browser.sleep(5000)));

      //  var errormsg=element(by.id('mat-error-6'));

      //expect(errormsg.isPresent()).to.be.true;
      expect("http://cbt.dilipoakacademy.com/dev/#/app/report/dashboard").to.equal(await browser.getCurrentUrl());
      //    browser.navigate().back();
      browser.sleep(3000);



   } catch (error) {
      //       expect(true).to.equal(false);
      console.log("Error is:   " + error);

   }

   ///  await keyword.visibilityOf(ele);

});