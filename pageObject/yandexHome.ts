import {browser, by, element} from "protractor";

export const yandexHome = {
  loginInput: element(by.css('#passp-field-login')),
  passInput: element(by.css('#passp-field-passwd[type=\'password\'][name=\'passwd\']')),
  loginButton: element(by.css('.desk-notif-card__login-enter-expanded.button[role=\'button\']')),
  getIn: element(by.xpath('//button[@class=\'control button2 button2_view_classic button2_size_l button2_theme_action button2_width_max button2_type_submit passp-form-button\']')),
  userName: element(by.xpath('//div[@class=\'mail-User-Name\']')),
  outBtn: element(by.css('[data-metric=\'Sign out of Yandex services\']')),
  errorMessage: element(by.css('.passp-form-field__error')),
  navVideo: element(by.css('[role=\'navigation\'] [data-id=\'video\']')),
  navPics: element(by.css('[role=\'navigation\'] [data-id=\'images\']')),
    navNews: element(by.css('[role=\'navigation\'] [data-id=\'news\']')),
    navMaps: element(by.css('[role=\'navigation\'] [data-id=\'maps\']')),
    navMarket: element(by.css('[role=\'navigation\'] [data-id=\'market\']')),
   navTranlate: element(by.css('[role=\'navigation\'] [data-id=\'translate\']')),
    logoYan: element(by.css('.logo_type_link')),
    langBtn: element(by.css('[role=\'button\'][title=\'Выбрать язык\']')),
    langBtnMore: element(by.css('[aria-label=\'ещё\'][role=\'link\']')),
    dropLang: element(by.css('.button_arrow_down')),
    dropLangEng: element(by.xpath('//span[contains(text(),\'English\')]')),
    saveBtn: element(by.xpath('//button[@class=\'button form__save button_theme_action button_size_m i-bem button_js_inited\']')),




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
        browser.sleep(3000);
        await yandexHome.loginInput.sendKeys(login);
        browser.sleep(3000);
        await this.clickButton(yandexHome.getIn);
        await yandexHome.passInput.sendKeys(password);
        browser.sleep(3000);
        await this.clickButton(yandexHome.getIn);
        browser.sleep(15000);
    }

    public static async userName () {
        let x = await yandexHome.userName.getText();
        return x;
    }

    public static async logOut () {
        await this.clickButton(yandexHome.userName);
        await this.clickButton(yandexHome.outBtn);
    }

    public static async textErr(){
        let x = await yandexHome.errorMessage.getText();
        return x;
    }

    public static async noodle(button){
        await this.clickButton(button);
        let x = browser.getTitle();
        return x;
    }






}

