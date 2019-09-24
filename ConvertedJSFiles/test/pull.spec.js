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
describe('Yandex pull testcases: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://yandex.by/');
        protractor_1.browser.sleep(10000);
    }));
    it('Login as AutotestUser', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.loginButton);
        yield yandexHome_1.homeMeth.putLogin('AutotestUser');
        protractor_1.browser.sleep(5000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.getIn);
        protractor_1.browser.sleep(5000);
        yield yandexHome_1.homeMeth.putPass('AutotestUser123');
        protractor_1.browser.sleep(5000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.getIn);
        protractor_1.browser.sleep(5000);
    }));
    fit('войти', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.loginPlz('AutotestUser', 'AutotestUser123');
    }));
}));
