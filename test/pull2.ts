import {browser, protractor} from "protractor";
import {homeMeth, yandexHome} from "../pageObject/yandexHome";
import {url} from "inspector";
import {moveCursor} from "readline";
let EC = protractor.ExpectedConditions;

describe('Пулл тестов 2: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });

    it('Добавленно два телефона', async () => {
        await homeMeth.clickButton(yandexHome.navMarket);
        await homeMeth.putText(yandexHome.headerSearch, 'Note 8');
        await homeMeth.clickButton(yandexHome.headerSearchBtn);
        let isClickable1 = await EC.invisibilityOf(yandexHome.mob1);
        browser.wait(isClickable1, 3000);
        await homeMeth.clickButton(yandexHome.mob1);
        let isClickable2 = await EC.invisibilityOf(yandexHome.mob2);
        browser.wait(isClickable2, 3000);
        await homeMeth.clickButton(yandexHome.mob2);
        await homeMeth.clickButton(yandexHome.compVS);
        let urlOfPage = browser.getCurrentUrl();
        let urlOfPage2 = '1731400948' && '573324027&';
        expect(urlOfPage).toContain(urlOfPage2);
    });


});