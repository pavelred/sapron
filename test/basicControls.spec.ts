import {browser} from "protractor";
import {YandexMarketMethods} from "../pageObject/yandexMarketMethods";
import {market} from "../pageObject/yandexMarket";


describe('Basic controls: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
        browser.sleep(25000);
    });

    it('Scroll + (un)check', async () => {
        await YandexMarketMethods.moveMeToElement(market.checkBox4Ram);
        await YandexMarketMethods.clickOn(market.checkBox4Ram);
        await YandexMarketMethods.clickOn(market.checkBox4Ram);
    });

    it('Click on Radio btn', async () => {
        await YandexMarketMethods.clickOn(market.radioBtn4Stars);
    });

    it('Вводим цену и потом выводим в консоль класс и значение', async () => {
        await YandexMarketMethods.putText('400', market.moneyFromField);
        await YandexMarketMethods.getTextFrom(market.moneyFromField);
        browser.sleep(20000);
    });

    it('Вводим слово в поиск, нажимаем на значение из дропдауна', async () => {
        await YandexMarketMethods.DropDown('apple', market.globalSearch);
    });

});