import {browser} from "protractor";
import {homeMeth, yandexHome} from "../pageObject/yandexHome";

describe('Пулл тестов: ', async () => {
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
        browser.sleep(10000);
    });

    xit('Логин на яндекс почту', async () => {
        await homeMeth.loginPlz('AutotestUser','AutotestUser123');
        expect(await homeMeth.userName()).toBe('AutotestUser');
    });

    xit('Яндекс почта логаут', async () => {
        await homeMeth.loginPlz('AutotestUser','AutotestUser123');
        await homeMeth.logOut();
        expect(await yandexHome.loginButton.isPresent()).toBe(true);
    });

    xit('Невалидный пароль', async () => {
        await homeMeth.loginPlz('AutotestUser','NoAutotestUser123');
        expect(await homeMeth.textErr()).toBe('Неверный пароль');
    });

    xit('Невалидный логин', async () => {
        await homeMeth.clickButton(yandexHome.loginButton);
        await homeMeth.putLogin('NoAutotestUser');
        await homeMeth.clickButton(yandexHome.getIn);
        expect(await homeMeth.textErr()).toBe('Такого аккаунта нет');
    });

    it('Навигация', async () => {
        let title = await homeMeth.noodle(yandexHome.navVideo);
        expect(title).toBe('Яндекс');
        //await homeMeth.clickButton(yandexHome.logoYan);
    });

    it('should ', async () => {

        let title = await homeMeth.noodle(yandexHome.navPics);
        expect(title).toBe('Яндекс.Картинки: поиск изображений в интернете, поиск по картинке');
        //await homeMeth.clickButton(yandexHome.logoYan);

    });
    it('should ', async () => {
        let title = await homeMeth.noodle(yandexHome.navNews);
        expect(title).toBe('Яндекс.Новости: Главные новости сегодня, самые свежие и последние новости Беларуси онлайн');
        //await homeMeth.clickButton(yandexHome.logoYan);

    });
    it('should ', async () => {
        let title = await homeMeth.noodle(yandexHome.navMaps);
        expect(title).toBe('Яндекс.Карты — подробная карта Беларуси и мира');

    });
    it('should ', async () => {
        let title = await homeMeth.noodle(yandexHome.navMaps);
        expect(title).toBe('Яндекс.Карты — подробная карта Беларуси и мира');
        //await homeMeth.clickButton(yandexHome.logoYan);
    });
    it('should ', async () => {
        let title = await homeMeth.noodle(yandexHome.navMarket);
        expect(title).toBe('Яндекс.Маркет — выбор и покупка товаров из проверенных интернет-магазинов');
        //await homeMeth.clickButton(yandexHome.logoYan);
    });
    it('should ', async () => {
        let title = await homeMeth.noodle(yandexHome.navTranlate);
        expect(title).toBe('Яндекс.Переводчик – словарь и онлайн перевод на английский, русский, немецкий, французский, украинский и другие языки.');
        //await homeMeth.clickButton(yandexHome.logoYan);
    });
    it('should ang switch', async () => {
        //яндекс не меняет, если что, поправлю потом
    });

});