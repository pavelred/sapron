import {homePageYan} from './homePageObject'

export class Action {
    public static async saveLocation () {
        await homePageYan.location.click();
    }
}