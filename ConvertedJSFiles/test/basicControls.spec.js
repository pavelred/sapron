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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const yandexMarketMethods_1 = require("../pageObject/yandexMarketMethods");
const yandexMarket_1 = require("../pageObject/yandexMarket");
describe('Basic controls: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1');
        protractor_1.browser.sleep(25000);
    }));
    it('Scroll + (un)check', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexMarketMethods_1.YandexMarketMethods.moveMeToElement(yandexMarket_1.market.checkBox4Ram);
        yield yandexMarketMethods_1.YandexMarketMethods.clickOn(yandexMarket_1.market.checkBox4Ram);
        yield yandexMarketMethods_1.YandexMarketMethods.clickOn(yandexMarket_1.market.checkBox4Ram);
    }));
    it('Click on Radio btn', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexMarketMethods_1.YandexMarketMethods.clickOn(yandexMarket_1.market.radioBtn4Stars);
    }));
    it('Вводим цену и потом выводим в консоль класс и значение', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexMarketMethods_1.YandexMarketMethods.putText('400', yandexMarket_1.market.moneyFromField);
        yield yandexMarketMethods_1.YandexMarketMethods.getTextFrom(yandexMarket_1.market.moneyFromField);
        protractor_1.browser.sleep(20000);
    }));
    it('Вводим слово в поиск, нажимаем на значение из дропдауна', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexMarketMethods_1.YandexMarketMethods.DropDown('apple', yandexMarket_1.market.globalSearch);
    }));
}));
