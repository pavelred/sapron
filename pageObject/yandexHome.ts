import {by, element} from "protractor";

export const yandexHome = {
  loginInput: element(by.css('#passp-field-login')),
  passInput: element(by.css('#passp-field-passwd[type=\'password\'][name=\'passwd\']')),
  loginButton: element(by.css('.desk-notif-card__login-enter-expanded.button[role=\'button\']')),
  getIn: element(by.xpath('//button[@class=\'control button2 button2_view_classic button2_size_l button2_theme_action button2_width_max button2_type_submit passp-form-button\']'))

};

export class homeMeth {
    public static async putLogin (yourText) {
        await yandexHome.loginInput.sendKeys(yourText);
    }

    public static async putPass (yourText) {
        await yandexHome.passInput.sendKeys(yourText);
    }

    public static async clickButton (yourLocator) {
        await yourLocator.click();
    }

    public static async loginPlz (login, password) {
        await this.clickButton(yandexHome.loginButton);
        await
        await yandexHome.loginInput.sendKeys(login);
        await
        await yandexHome.passInput.sendKeys(password);
    }

}

