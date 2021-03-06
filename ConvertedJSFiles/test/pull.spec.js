"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const yandexHome_1 = require("../pageObject/yandexHome");
let EC = protractor_1.protractor.ExpectedConditions;
describe('Пулл тестов: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://yandex.by/');
        protractor_1.browser.sleep(10000);
    }));
    xit('Логин на яндекс почту', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.loginPlz('AutotestUser', 'AutotestUser123');
        expect(yield yandexHome_1.homeMeth.userName()).toBe('AutotestUser');
    }));
    xit('Яндекс почта логаут', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.loginPlz('AutotestUser', 'AutotestUser123');
        yield yandexHome_1.homeMeth.logOut();
        expect(yield yandexHome_1.yandexHome.loginButton.isPresent()).toBe(true);
    }));
    xit('Невалидный пароль', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.loginPlz('AutotestUser', 'NoAutotestUser123');
        expect(yield yandexHome_1.homeMeth.textErr()).toBe('Неверный пароль');
    }));
    xit('Невалидный логин', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.loginButton);
        yield yandexHome_1.homeMeth.putLogin('NoAutotestUser');
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.getIn);
        expect(yield yandexHome_1.homeMeth.textErr()).toBe('Такого аккаунта нет');
    }));
    it('Навигация', () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield yandexHome_1.homeMeth.noodle(yandexHome_1.yandexHome.navVideo);
        expect(title).toBe('Яндекс');
        //await homeMeth.clickButton(yandexHome.logoYan);
    }));
    it('should ', () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield yandexHome_1.homeMeth.noodle(yandexHome_1.yandexHome.navPics);
        expect(title).toBe('Яндекс.Картинки: поиск изображений в интернете, поиск по картинке');
        //await homeMeth.clickButton(yandexHome.logoYan);
    }));
    it('should ', () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield yandexHome_1.homeMeth.noodle(yandexHome_1.yandexHome.navNews);
        expect(title).toBe('Яндекс.Новости: Главные новости сегодня, самые свежие и последние новости Беларуси онлайн');
        //await homeMeth.clickButton(yandexHome.logoYan);
    }));
    it('should ', () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield yandexHome_1.homeMeth.noodle(yandexHome_1.yandexHome.navMaps);
        expect(title).toBe('Яндекс.Карты — подробная карта Беларуси и мира');
    }));
    it('should ', () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield yandexHome_1.homeMeth.noodle(yandexHome_1.yandexHome.navMaps);
        expect(title).toBe('Яндекс.Карты — подробная карта Беларуси и мира');
        //await homeMeth.clickButton(yandexHome.logoYan);
    }));
    it('should ', () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield yandexHome_1.homeMeth.noodle(yandexHome_1.yandexHome.navMarket);
        expect(title).toBe('Яндекс.Маркет — выбор и покупка товаров из проверенных интернет-магазинов');
        //await homeMeth.clickButton(yandexHome.logoYan);
    }));
    it('should ', () => __awaiter(void 0, void 0, void 0, function* () {
        let title = yield yandexHome_1.homeMeth.noodle(yandexHome_1.yandexHome.navTranlate);
        expect(title).toBe('Яндекс.Переводчик – словарь и онлайн перевод на английский, русский, немецкий, французский, украинский и другие языки.');
        //await homeMeth.clickButton(yandexHome.logoYan);
    }));
    it('should ang switch', () => __awaiter(void 0, void 0, void 0, function* () {
        //яндекс не меняет, если что, поправлю потом
    }));
    fit('should why not?', () => __awaiter(void 0, void 0, void 0, function* () {
        let isClickable = yield EC.elementToBeClickable(yandexHome_1.yandexHome.navNews);
        protractor_1.browser.wait(isClickable, 5000); //ждём пока кнопка станет кликабельной
        let jesus = EC.and(EC.textToBePresentInElement(yield yandexHome_1.yandexHome.navNews, 'Новости'), EC.visibilityOf(yield yandexHome_1.yandexHome.navNews), isClickable);
        protractor_1.browser.wait(jesus, 5000); //ждём пока все условия будут true.
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navNews);
    }));
}));
