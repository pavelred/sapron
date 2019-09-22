import {browser} from "protractor";
import {Action} from "../pageObject/homeMethods";
import {homePageYan} from "../pageObject/homePageObject";
//import {it} from "selenium-webdriver/testing";

describe('More tab', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });

    it('should compare two arrays from London and Paris', async () => {
        //browser.sleep(5000);
        //await Action.waiter(homePageYan.location);
        await Action.sendCitySave('Лондон');
        let arr1 = await Action.getDataFromMoreTab();
        //browser.sleep(3000);
        await Action.sendCitySave('Париж');
        let arr2 = await Action.getDataParis();
        expect(arr1).toEqual(arr2);
    });

});