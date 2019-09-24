import {browser} from "protractor";
import {homeMeth, yandexHome} from "../pageObject/yandexHome";

describe('Yandex pull testcases: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
        browser.sleep(10000);
    });

    it('Login as AutotestUser', async () => {
        await homeMeth.clickButton(yandexHome.loginButton);
        await homeMeth.putLogin('AutotestUser');
        browser.sleep(5000);
        await homeMeth.clickButton(yandexHome.getIn);
        browser.sleep(5000);
        await homeMeth.putPass('AutotestUser123');
        browser.sleep(5000);
        await homeMeth.clickButton(yandexHome.getIn);
        browser.sleep(5000);
    });

    it('войти', async () => {
        await homeMeth.loginPlz('AutotestUser','AutotestUser123');
    });

});