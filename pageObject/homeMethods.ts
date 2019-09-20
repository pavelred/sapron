import {homePageYan} from './homePageObject'
import {geoPageYan} from "./geoPageObject";
import {browser, by, element} from "protractor";

export class Action {
    public static async saveLocation () {
        await homePageYan.location.click();
    }

    public static async sendCitySave (x) {
        await geoPageYan.city.clear();
        await geoPageYan.city.sendKeys(x);
        browser.sleep(4000);
        await geoPageYan.dropdownFirstEl.click();
    }

    public static async getNameOfCity () {
        await homePageYan.location.getText;

    }

    public static async getDataFromMoreTab () {
        await homePageYan.moreTab.click();
        let dataTwo = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
        let textData = await dataTwo.getText();
        console.log(textData);
        browser.sleep(3000);
    }

    public static async getVS () {

    }

}