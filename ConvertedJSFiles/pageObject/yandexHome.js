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
    compVS: protractor_1.element(protractor_1.by.css('[href=\'/compare?track=rmmbr\']')),
    del: protractor_1.element(protractor_1.by.xpath('//span[@class=\'n-compare-toolbar__action-clear link\']//span[@class=\'link__inner\']')),
    textOnComparePage: protractor_1.element(protractor_1.by.xpath('//div[@class=\'title title_size_18\']')),
    categoryElecto: protractor_1.element(protractor_1.by.css('[href=\'/catalog--elektronika/54440\']')),
    actionCams: protractor_1.element(protractor_1.by.xpath('//div[4]//div[2]//ul[1]//li[3]//div[1]//a[1]')),
    sortir: protractor_1.element(protractor_1.by.xpath('//div[@class=\'n-filter-panel-dropdown i-bem n-filter-panel-dropdown_js_inited\']//div[3]//a[1]')),
    categoryBit: protractor_1.element(protractor_1.by.css('[href=\'/catalog--bytovaia-tekhnika/54419\']')),
    fridge: protractor_1.element(protractor_1.by.xpath('//body[@class=\'b-page b-page__body b-page_theme_normal n-layout_name_catalog n-layout i-font_face_ys-text fonts-loaded n-layout_nid_54419 i-global i-anchor-scroller i-font-loader b-zone b-spy-init i-bem b-page_js_inited i-global_js_inited n-layout_js_inited i-anchor-scroller_js_inited i-font-loader_js_inited b-spy-init_js_inited b-zone_js_inited\']//div[@class=\'section N9o4gAuSnb QGJ9xgri-V qUW8qep9Rv _2n8U4OismH\']//div//div//div[1]//div[2]//ul[1]//li[1]//div[1]//a[1]')),
    fridgeWidth: protractor_1.element(protractor_1.by.xpath('//input[@id=\'15464317to\']'))
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
    static putMouseOn(location) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.actions().
                mouseMove(location).
                perform();
        });
    }
    static deleteElement(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickButton(locator);
        });
    }
    static afterDeleteText() {
        return __awaiter(this, void 0, void 0, function* () {
            let x = yield exports.yandexHome.textOnComparePage.getText();
            return x;
        });
    }
}
exports.homeMeth = homeMeth;
