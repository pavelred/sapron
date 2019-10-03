import {browser, protractor} from "protractor";
import {homeMeth, yandexHome} from "../pageObject/yandexHome";
let EC = protractor.ExpectedConditions;

describe('Пулл тестов 2: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });

    it('Логин на яндекс почту', async () => {
        await homeMeth.clickButton(yandexHome.navMarket);
        await homeMeth.putText(yandexHome.headerSearch, 'Note 8');
        await homeMeth.clickButton(yandexHome.headerSearchBtn);
        await homeMeth.clickButton(yandexHome.mob1);
        browser.sleep(2000);
        await homeMeth.clickButton(yandexHome.mob2);
        browser.sleep(2000);
        await homeMeth.clickButton(yandexHome.compVS);
    });


});