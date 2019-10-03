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
    getIn: protractor_1.element(protractor_1.by.xpath('//button[@class=\'control button2 button2_view_classic button2_size_l button2_theme_action button2_width_max button2_type_submit passp-form-button\']')),
    userName: protractor_1.element(protractor_1.by.xpath('//div[@class=\'mail-User-Name\']')),
    outBtn: protractor_1.element(protractor_1.by.css('[data-metric=\'Sign out of Yandex services\']')),
    errorMessage: protractor_1.element(protractor_1.by.css('.passp-form-field__error')),
    navVideo: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-id=\'video\']')),
    navPics: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-id=\'images\']')),
    navNews: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-id=\'news\']')),
    navMaps: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-id=\'maps\']')),
    navMarket: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-id=\'market\']')),
    navTranlate: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-id=\'translate\']')),
    logoYan: protractor_1.element(protractor_1.by.css('.logo_type_link')),
    langBtn: protractor_1.element(protractor_1.by.css('[role=\'button\'][title=\'Выбрать язык\']')),
    langBtnMore: protractor_1.element(protractor_1.by.css('[aria-label=\'ещё\'][role=\'link\']')),
    dropLang: protractor_1.element(protractor_1.by.css('.button_arrow_down')),
    dropLangEng: protractor_1.element(protractor_1.by.xpath('//span[contains(text(),\'English\')]')),
    saveBtn: protractor_1.element(protractor_1.by.xpath('//button[@class=\'button form__save button_theme_action button_size_m i-bem button_js_inited\']')),
    headerSearch: protractor_1.element(protractor_1.by.css('#header-search')),
    headerSearchBtn: protractor_1.element(protractor_1.by.css('[role=\'button\'][type=\'submit\']')),
    mob1: protractor_1.element(protractor_1.by.css('[data-id=\'model-1731400948\'] .image_name_compare')),
    mob2: protractor_1.element(protractor_1.by.css('[data-id=\'model-573324027\'] .image_name_compare')),
    compVS: protractor_1.element(protractor_1.by.css('.button[href=\'/compare?track=rmmbr\']'))
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
            protractor_1.browser.sleep(3000);
            yield exports.yandexHome.loginInput.sendKeys(login);
            protractor_1.browser.sleep(3000);
            yield this.clickButton(exports.yandexHome.getIn);
            yield exports.yandexHome.passInput.sendKeys(password);
            protractor_1.browser.sleep(3000);
            yield this.clickButton(exports.yandexHome.getIn);
            protractor_1.browser.sleep(15000);
        });
    }
    static userName() {
        return __awaiter(this, void 0, void 0, function* () {
            let x = yield exports.yandexHome.userName.getText();
            return x;
        });
    }
    static logOut() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickButton(exports.yandexHome.userName);
            yield this.clickButton(exports.yandexHome.outBtn);
        });
    }
    static textErr() {
        return __awaiter(this, void 0, void 0, function* () {
            let x = yield exports.yandexHome.errorMessage.getText();
            return x;
        });
    }
    static noodle(button) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickButton(button);
            let x = protractor_1.browser.getTitle();
            return x;
        });
    }
    static putText(locator, text) {
        return __awaiter(this, void 0, void 0, function* () {
            locator.sendKeys(text);
        });
    }
}
exports.homeMeth = homeMeth;
