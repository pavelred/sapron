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

    it('Удаление телефон и проверка, что они удалились', async () => {
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
        await homeMeth.deleteElement(yandexHome.del);
        let textOnBoard = EC.visibilityOf(yandexHome.textOnComparePage);
        browser.wait(textOnBoard, 5000);
        expect(await homeMeth.afterDeleteText()).toContain('Товаров нет');
    });

    it('Сортировка по цене', async () => {
        await homeMeth.clickButton(yandexHome.navMarket); //нажимаем маркет
        await homeMeth.clickButton(yandexHome.categoryElecto); //нажимаем на категории электроники
        browser.sleep(5000);
        await homeMeth.clickButton(yandexHome.actionCams); //нажимаем на экш-камеры
        await homeMeth.clickButton(yandexHome.sortir);
        await homeMeth.clickButton(yandexHome.sortir);
        let urlOfPage = browser.getCurrentUrl();
        let urlOfPage2 = 'dprice';
        expect(urlOfPage).toContain(urlOfPage2);
    });

    it('Сортировка по тегу', async () => {
        
    });

});