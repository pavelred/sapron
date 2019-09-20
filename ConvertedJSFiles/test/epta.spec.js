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
const homeMethods_1 = require("../pageObject/homeMethods");
const protractor_1 = require("protractor");
//import {beforeEach, describe, it} from "selenium-webdriver/testing";
describe('Change location and check more tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        beforeEach(function () {
            protractor_1.browser.waitForAngularEnabled(false);
            protractor_1.browser.get('https://yandex.by/');
        });
        it('should have a title', function () {
            return __awaiter(this, void 0, void 0, function* () {
                expect(yield protractor_1.browser.getTitle()).toEqual("Яндекс");
            });
        });
        it('should click on location button', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield homeMethods_1.Action.saveLocation();
                protractor_1.browser.sleep(5000);
            });
        });
        /*    xit('should select location as London and save it', async function () {
                await homePage.location.click();
                await geoPage.city.clear();
                await geoPage.city.sendKeys('Лондон');
                browser.sleep(3500);
                await geoPage.dropdownFirstEl.click();
                browser.sleep(3000);
            });
        
             xit('should check the more tab and get elements from it', async function () {
                 await homePage.moreTab.click();
                 let elabi = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
                 let elabi2 = await elabi.getText();
                 console.log(elabi2);
                 browser.sleep(3000);
             });
        
             xit('should change location to Paris and compaire more tabs', async function () {
                 await homePage.moreTab.click();
                 let elabi = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
                 let elabi2 = await elabi.getText();
                 browser.sleep(3000);
                 await homePage.location.click();
                 await geoPage.city.clear();
                 await geoPage.city.sendKeys('Париж');
                 browser.sleep(3500);
                 await geoPage.dropdownFirstEl.click();
                 browser.sleep(3000);
                 await homePage.moreTab.click();
                 let elabi3 = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
                 let elabi4 = await elabi3.getText();
                 await expect(elabi2).toEqual(elabi4);
                 browser.sleep(3000);
        
             });
        
         */
    });
});
