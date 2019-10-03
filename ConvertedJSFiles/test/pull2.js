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
const yandexHome_1 = require("../pageObject/yandexHome");
let EC = protractor_1.protractor.ExpectedConditions;
describe('Пулл тестов 2: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://yandex.by/');
    }));
    it('Добавленно два телефона', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMarket);
        yield yandexHome_1.homeMeth.putText(yandexHome_1.yandexHome.headerSearch, 'Note 8');
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.headerSearchBtn);
        let isClickable1 = yield EC.invisibilityOf(yandexHome_1.yandexHome.mob1);
        protractor_1.browser.wait(isClickable1, 3000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.mob1);
        let isClickable2 = yield EC.invisibilityOf(yandexHome_1.yandexHome.mob2);
        protractor_1.browser.wait(isClickable2, 3000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.mob2);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.compVS);
        let urlOfPage = protractor_1.browser.getCurrentUrl();
        let urlOfPage2 = '1731400948' && '573324027&';
        expect(urlOfPage).toContain(urlOfPage2);
    }));
}));
