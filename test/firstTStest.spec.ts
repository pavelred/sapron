import {browser} from "protractor";
import {Action} from "../pageObject/homeMethods";
//import {it} from "selenium-webdriver/testing";

describe('More tab', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });

    it('should click on location button', async () => {
        await Action.saveLocation();
        browser.sleep(5000);
    });

    it('should write London and wait', async () => {
        await Action.saveLocation();
        await Action.sendCitySave('Лондон');
        //expect(Action.getNameOfCity).toEqual('Лондон');
    });

    fit('should check and save data from more tab',  async () => {
        await Action.getDataFromMoreTab();
    });


});