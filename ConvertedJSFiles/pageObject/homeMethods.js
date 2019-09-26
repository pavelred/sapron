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
const homePageObject_1 = require("./homePageObject");
const geoPageObject_1 = require("./geoPageObject");
const protractor_1 = require("protractor");
class Action {
    static saveLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePageObject_1.homePageYan.location.click();
        });
    }
    static waiter(x) {
        return __awaiter(this, void 0, void 0, function* () {
            let Timer = 5000;
            let Count = 0;
            let yourLocator = x;
            while (!yourLocator.isDisplayed() && Count < Timer) {
                protractor_1.browser.sleep(1000);
                Count += 1000;
            }
            if (Count === 5000 && !yourLocator.isDisplayed()) {
                throw new Error('No such element is Displayed');
                return false;
            }
            else {
                return true;
            }
        });
    }
    static sendCitySave(x) {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePageObject_1.homePageYan.location.click();
            yield geoPageObject_1.geoPageYan.city.clear();
            yield geoPageObject_1.geoPageYan.city.sendKeys(x);
            protractor_1.browser.sleep(3000);
            yield geoPageObject_1.geoPageYan.dropdownFirstEl.click();
        });
    }
    static getDataFromMoreTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePageObject_1.homePageYan.moreTab.click();
            let dataTwo = protractor_1.element.all(protractor_1.by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
            let textData = yield dataTwo.getText();
            protractor_1.browser.sleep(3000);
            return textData;
        });
    }
    static getDataParis() {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePageObject_1.homePageYan.moreTab.click();
            let dataThree = protractor_1.element.all(protractor_1.by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
            let textParis = yield dataThree.getText();
            protractor_1.browser.sleep(2000);
            return textParis;
        });
    }
}
exports.Action = Action;
