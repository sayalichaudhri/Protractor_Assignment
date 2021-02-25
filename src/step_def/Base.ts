import { browser, ElementFinder, ProtractorExpectedConditions } from "protractor";

export class Base{

    private ec: ProtractorExpectedConditions = browser.ExpectedConditions;

    private timeOut = 30000;

    public  async openBrowser(url:string)
    {
            await browser.get(url);
    }

    public async windowMaximize(){
        await browser.manage().window().maximize();
    }

    public async waitForAngularPage()
    {
        await browser.waitForAngularEnabled(false);
    }

    //Methods for waits

    public async visibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.visibilityOf(element), this.timeOut, "element is not visible");

    }
    public async elementToBeClickable(element: ElementFinder) {
        await browser.wait(this.ec.elementToBeClickable(element), this.timeOut, "failed to click element");

    }


    private async clickOnElement(element: ElementFinder) {
        this.elementToBeClickable(element);
        await element.click();

    }


   private async setEnterText(element: ElementFinder, testdata: string) {
        this.visibilityOf(element);
        await element.sendKeys(testdata);

    }

    public async clearAndType(element: ElementFinder, testdata: string) {
        this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testdata);

    }

    public async assertText(element: ElementFinder, expectedText: string) {
        this.visibilityOf(element);
        let actualText = await element.getText();
        expect(actualText.trim()).toBe(expectedText);


    }

    public async assertTrue(element: ElementFinder) {
        this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(true);

    }
    public async assertFalse(element: ElementFinder) {
        this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(false);

    }

}