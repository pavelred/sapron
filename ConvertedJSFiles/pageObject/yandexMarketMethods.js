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
class YandexMarketMethods {
    static moveMeToElement(x) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(x).perform();
            protractor_1.browser.sleep(1500);
        });
    }
    static clickOn(x) {
        return __awaiter(this, void 0, void 0, function* () {
            let btn = x;
            yield protractor_1.browser.actions().mouseMove(btn).click().perform();
            protractor_1.browser.sleep(1500);
        });
    }
    static putText(text, locator) {
        return __awaiter(this, void 0, void 0, function* () {
            let marlboro = text;
            let winston = locator;
            winston.sendKeys(marlboro);
            protractor_1.browser.sleep(5000);
        });
    }
    static getTextFrom(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            let uzi = locator;
            let text = yield uzi.getAttribute('value');
            let smuzi = yield uzi.getAttribute('class');
            console.log(text);
            console.log(smuzi);
        });
    }
}
exports.YandexMarketMethods = YandexMarketMethods;
