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
    it('should click on location button', () => __awaiter(void 0, void 0, void 0, function* () {
        yield homeMethods_1.Action.saveLocation();
        protractor_1.browser.sleep(5000);
    }));
    it('should write London and wait', () => __awaiter(void 0, void 0, void 0, function* () {
        yield homeMethods_1.Action.saveLocation();
        yield homeMethods_1.Action.sendCitySave('Лондон');
        //expect(Action.getNameOfCity).toEqual('Лондон');
    }));
    fit('should check and save data from more tab', () => __awaiter(void 0, void 0, void 0, function* () {
        yield homeMethods_1.Action.getDataFromMoreTab();
    }));
}));
