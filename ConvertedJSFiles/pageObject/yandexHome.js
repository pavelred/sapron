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
exports.yandexHome = {
    loginInput: protractor_1.element(protractor_1.by.css('#passp-field-login')),
    passInput: protractor_1.element(protractor_1.by.css('#passp-field-passwd[type=\'password\'][name=\'passwd\']')),
    loginButton: protractor_1.element(protractor_1.by.css('.desk-notif-card__login-enter-expanded.button[role=\'button\']')),
    getIn: protractor_1.element(protractor_1.by.xpath('//button[@class=\'control button2 button2_view_classic button2_size_l button2_theme_action button2_width_max button2_type_submit passp-form-button\']'))
};
class homeMeth {
    static putLogin(yourText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.yandexHome.loginInput.sendKeys(yourText);
        });
    }
    static putPass(yourText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield exports.yandexHome.passInput.sendKeys(yourText);
        });
    }
    static clickButton(yourLocator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield yourLocator.click();
        });
    }
    static loginPlz(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickButton(exports.yandexHome.loginButton);
            protractor_1.browser.sleep(5000);
            yield exports.yandexHome.loginInput.sendKeys(login);
            protractor_1.browser.sleep(5000);
            yield this.clickButton(exports.yandexHome.getIn);
            yield exports.yandexHome.passInput.sendKeys(password);
            protractor_1.browser.sleep(5000);
            yield this.clickButton(exports.yandexHome.getIn);
        });
    }
}
exports.homeMeth = homeMeth;
