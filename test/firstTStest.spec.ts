import {browser} from "protractor";
import {Action} from "../pageObject/homeMethods";
//import {it} from "selenium-webdriver/testing";

describe('Change location and check more tab', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });

    it('should click on location button', async () => {
        await Action.saveLocation();
        browser.sleep(5000);
    });

    it('should click on location button', async () => {
        await Action.saveLocation();
        browser.sleep(5000);
    });

});