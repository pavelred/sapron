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
    static sendCitySave(x) {
        return __awaiter(this, void 0, void 0, function* () {
            yield geoPageObject_1.geoPageYan.city.clear();
            yield geoPageObject_1.geoPageYan.city.sendKeys(x);
            protractor_1.browser.sleep(4000);
            yield geoPageObject_1.geoPageYan.dropdownFirstEl.click();
        });
    }
    static getNameOfCity() {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePageObject_1.homePageYan.location.getText;
        });
    }
    static getDataFromMoreTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePageObject_1.homePageYan.moreTab.click();
            let dataTwo = protractor_1.element.all(protractor_1.by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
            let textData = yield dataTwo.getText();
            console.log(textData);
            protractor_1.browser.sleep(3000);
        });
    }
}
exports.Action = Action;
