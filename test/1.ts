import {browser} from "protractor";
import {Action} from "../pageObject/homeMethods";

describe('More tab', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });

    it('should compare two arrays from London and Paris', async () => {
        await Action.sendCitySave('Лондон');
        let arr1 = await Action.getDataFromMoreTab();
        await Action.sendCitySave('Париж');
        let arr2 = await Action.getDataParis();
        expect(arr1).toEqual(arr2);
    });

});