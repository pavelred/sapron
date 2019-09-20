import {homePageYan} from './../pageObject/home.pageObject'

export class Action {
    public static async saveLocation () {
        await homePageYan.location.click();
    }
}