import {browser, by, element} from "protractor";
import {emitKeypressEvents} from "readline";

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
  logoYan: element(by.xpath('//a[@class=\'mail-Logo-Yandex js-mail-logo-yandex with-menu ns-action\']')),
  langBtn: element(by.css('[role=\'button\'][title=\'Выбрать язык\']')),
  langBtnMore: element(by.css('[aria-label=\'ещё\'][role=\'link\']')),
  dropLang: element(by.css('.button_arrow_down')),
  dropLangEng: element(by.xpath('//span[contains(text(),\'English\')]')),
  saveBtn: element(by.xpath('//button[@class=\'button form__save button_theme_action button_size_m i-bem button_js_inited\']')),
  headerSearch: element(by.css('#header-search')),
  headerSearchBtn: element(by.css('[role=\'button\'][type=\'submit\']')),
  mob1: element(by.css('[data-id=\'model-1731400948\'] .image_name_compare')),
  mob2: element(by.css('[data-id=\'model-573324027\'] .image_name_compare')),
  compVS: element(by.css('[href=\'/compare?track=rmmbr\']')),
  del: element(by.xpath('//span[@class=\'n-compare-toolbar__action-clear link\']//span[@class=\'link__inner\']')),
  textOnComparePage: element(by.xpath('//div[@class=\'title title_size_18\']')),
  categoryElecto: element(by.css('[href=\'/catalog--elektronika/54440\']')),
  actionCams: element(by.xpath('//div[4]//div[2]//ul[1]//li[3]//div[1]//a[1]')),
  sortir: element(by.xpath('//div[@class=\'n-filter-panel-dropdown i-bem n-filter-panel-dropdown_js_inited\']//div[3]//a[1]')),
  categoryBit: element(by.css('[href=\'/catalog--bytovaia-tekhnika/54419\']')),
  fridge: element(by.xpath('//body[@class=\'b-page b-page__body b-page_theme_normal n-layout_name_catalog n-layout i-font_face_ys-text fonts-loaded n-layout_nid_54419 i-global i-anchor-scroller i-font-loader b-zone b-spy-init i-bem b-page_js_inited i-global_js_inited n-layout_js_inited i-anchor-scroller_js_inited i-font-loader_js_inited b-spy-init_js_inited b-zone_js_inited\']//div[@class=\'section N9o4gAuSnb QGJ9xgri-V qUW8qep9Rv _2n8U4OismH\']//div//div//div[1]//div[2]//ul[1]//li[1]//div[1]//a[1]')),
  fridgeWidth: element(by.xpath('//input[@id=\'15464317to\']')),
  skipButton: element(by.css('.control.button2[data-lego=\'react\'][tabindex=\'0\']')),
  navMusic: element(by.css('[data-id=\'music\'][href=\'https://music.yandex.by/\']')),
  musicSearch: element(by.css('input[placeholder=\'Трек, альбом, исполнитель, подкаст\']')),
  musicFirst: element(by.xpath('//div[@class=\'d-suggest__items d-suggest__items_type_artist\']//div[2]//a[1]')),
  artist: element(by.css('h1.page-artist__title.typo-h1.typo-h1_big')),
  popularAlbums: element(by.css('.album__artist.deco-typo-secondary.typo-add')),
  playPopular: element(by.css('.button-play[data-b=\'3411\']')),
  pauseTrack: element(by.css('.player-controls__btn_pause.deco-player-controls__button[title=\'Пауза [P]\']')),
  firstTrack: element(by.css('.button-play.button2.button2_rounded')),





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
        browser.sleep(3000);
        await this.clickButton(yandexHome.logoYan);
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

    public static async putText(locator, text){
        locator.sendKeys(text);
        browser.sleep(3000);
    }

    public static async putMouseOn(location){
        browser.actions().
            mouseMove(location).
            perform();
    }

    public static async deleteElement(locator){
        await this.clickButton(locator);
    }

    public static async afterDeleteText () {
        let x = await yandexHome.textOnComparePage.getText();
        return x;
    }

    public static async whoArtist () {
        let x = await yandexHome.artist.getText();
        return x;
    }

    public static async albums () {
        let x = await yandexHome.popularAlbums.getText();
        return x;
    }


}

