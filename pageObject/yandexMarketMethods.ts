import {browser} from "protractor";
import {market} from "./yandexMarket";

export class YandexMarketMethods {

    public static async moveMeToElement (x) {
        await browser.actions().mouseMove(x).perform();
        browser.sleep(1500)
    }

    public static async clickOn (x) {
        let btn = x;
        await browser.actions().mouseMove(btn).click().perform();
        browser.sleep(1500)
    }

    public static async putText (text, locator) {
        let marlboro = text;
        let winston = locator;
        winston.sendKeys(marlboro);
        browser.sleep(5000);
    }

    public static async getTextFrom (locator) {
        let uzi = locator;
        let text = await uzi.getAttribute('value');
        let smuzi = await uzi.getAttribute('class');
        console.log(text);
        console.log(smuzi);
    }

    public static async DropDown (text, locator) {
        let marlboro = text;
        let winston = locator;
        let Timer = 5000;
        let Count = 0;
        winston.sendKeys(marlboro);
        let btn = market.dropdownList;
        while (!market.dropdownList.isPresent() && Count<Timer){
            browser.sleep(1000);
            Count+=1000;
        } if (Count === 5000 && !market.dropdownList.isPresent()){
            throw new Error('No such element');
        }else
        await browser.actions().mouseMove(btn).click().perform();
        browser.sleep(5000);
    }



}