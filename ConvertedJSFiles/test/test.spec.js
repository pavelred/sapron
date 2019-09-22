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
const homeMethods_1 = require("../pageObject/homeMethods");
//import {it} from "selenium-webdriver/testing";
describe('More tab', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://yandex.by/');
    }));
    it('should compare two arrays from London and Paris', () => __awaiter(void 0, void 0, void 0, function* () {
        //browser.sleep(5000);
        //await Action.waiter(homePageYan.location);
        yield homeMethods_1.Action.sendCitySave('Лондон');
        let arr1 = yield homeMethods_1.Action.getDataFromMoreTab();
        //browser.sleep(3000);
        yield homeMethods_1.Action.sendCitySave('Париж');
        let arr2 = yield homeMethods_1.Action.getDataParis();
        expect(arr1).toEqual(arr2);
    }));
}));
