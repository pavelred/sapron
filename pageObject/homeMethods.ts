import {homePageYan} from './homePageObject'
import {geoPageYan} from "./geoPageObject";
import {browser, by, element} from "protractor";

export class Action {
    public static async saveLocation () {
        await homePageYan.location.click();
    }

    public static async waiter (x) {
        let Timer = 5000;
        let Count = 0;
        let yourLocator = x;
        while (!yourLocator.isDisplayed() && Count<Timer) {
            browser.sleep(1000);
            Count+=1000;
        }if (Count === 5000 && !yourLocator.isDisplayed()) {
            throw new Error('No such element is Displayed');
            return false;
        }else {
            return true;
        }
    }

    public static async sendCitySave (x) {
        await homePageYan.location.click();
        await geoPageYan.city.clear();
        await geoPageYan.city.sendKeys(x);
        browser.sleep(3000);
        await geoPageYan.dropdownFirstEl.click();
    }

    public static async getDataFromMoreTab () {
        await homePageYan.moreTab.click();
        let dataTwo = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
        let textData = await dataTwo.getText();
        browser.sleep(3000);
        return textData;

    }

    public static async getDataParis () {
        await homePageYan.moreTab.click();
        let dataThree = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
        let textParis = await dataThree.getText();
        browser.sleep(2000);
        return textParis;
    }

}