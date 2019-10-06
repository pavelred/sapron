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
describe('Пулл тестов 2: ', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://yandex.by/');
    }));
    it('Добавленно два телефона', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMarket);
        yield yandexHome_1.homeMeth.putText(yandexHome_1.yandexHome.headerSearch, 'Note 8');
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.headerSearchBtn);
        let isClickable1 = yield EC.invisibilityOf(yandexHome_1.yandexHome.mob1);
        protractor_1.browser.wait(isClickable1, 3000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.mob1);
        let isClickable2 = yield EC.invisibilityOf(yandexHome_1.yandexHome.mob2);
        protractor_1.browser.wait(isClickable2, 3000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.mob2);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.compVS);
        let urlOfPage = protractor_1.browser.getCurrentUrl();
        let urlOfPage2 = '1731400948' && '573324027&';
        expect(urlOfPage).toContain(urlOfPage2);
    }));
    it('Удаление телефон и проверка, что они удалились', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMarket);
        yield yandexHome_1.homeMeth.putText(yandexHome_1.yandexHome.headerSearch, 'Note 8');
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.headerSearchBtn);
        let isClickable1 = yield EC.invisibilityOf(yandexHome_1.yandexHome.mob1);
        protractor_1.browser.wait(isClickable1, 3000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.mob1);
        let isClickable2 = yield EC.invisibilityOf(yandexHome_1.yandexHome.mob2);
        protractor_1.browser.wait(isClickable2, 3000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.mob2);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.compVS);
        yield yandexHome_1.homeMeth.deleteElement(yandexHome_1.yandexHome.del);
        let textOnBoard = EC.visibilityOf(yandexHome_1.yandexHome.textOnComparePage);
        protractor_1.browser.wait(textOnBoard, 5000);
        expect(yield yandexHome_1.homeMeth.afterDeleteText()).toContain('Товаров нет');
    }));
    it('Сортировка по цене', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMarket); //нажимаем маркет
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.categoryElecto); //нажимаем на категории электроники
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.actionCams); //нажимаем на экш-камеры
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.sortir); //нажимаем на кнопку сортировки
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.sortir);
        let urlOfPage = protractor_1.browser.getCurrentUrl();
        let urlOfPage2 = 'dprice';
        expect(urlOfPage).toContain(urlOfPage2);
    }));
    it('Сортировка по тегу', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMarket); //нажимаем маркет
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.categoryBit); //нажимаем на категории бытовой техники
        let isClickable = EC.elementToBeClickable(yandexHome_1.yandexHome.fridge);
        protractor_1.browser.wait(isClickable, 5000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.fridge);
        yield yandexHome_1.homeMeth.putText(yandexHome_1.yandexHome.fridgeWidth, '50');
        let urlOfPage = protractor_1.browser.getCurrentUrl();
        let urlOfPage2 = '50';
        expect(urlOfPage).toContain(urlOfPage2);
    }));
    it('Яндекс музыка', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.loginPlz('AutotestUser', 'AutotestUser123');
        let isClickable = EC.visibilityOf(yandexHome_1.yandexHome.navMusic);
        protractor_1.browser.wait(isClickable, 5000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMusic);
        protractor_1.browser.sleep(7000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.musicSearch);
        protractor_1.browser.sleep(2000);
        let isClcbl = EC.elementToBeClickable(yandexHome_1.yandexHome.musicSearch);
        protractor_1.browser.wait(isClcbl, 5000);
        protractor_1.browser.sleep(2000);
        yield yandexHome_1.homeMeth.putText(yandexHome_1.yandexHome.musicSearch, 'Metall');
        protractor_1.browser.sleep(5000);
        let dropShow = EC.visibilityOf(yandexHome_1.yandexHome.musicFirst);
        protractor_1.browser.wait(dropShow, 7000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.musicFirst);
        let artist = yield yandexHome_1.homeMeth.whoArtist();
        let album = yield yandexHome_1.homeMeth.albums();
        console.log(album, artist);
    }));
    it('Яндекс музыка', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.loginPlz('AutotestUser', 'AutotestUser123');
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMusic);
        yield yandexHome_1.homeMeth.putText(yandexHome_1.yandexHome.musicSearch, 'Metall');
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.musicFirst);
        let artist = yield yandexHome_1.homeMeth.whoArtist();
        let album = yield yandexHome_1.homeMeth.albums();
        console.log(album, artist);
        expect(artist && album).toContain('Metallica');
    }));
    fit('Яндекс музыка: воспроизведение', () => __awaiter(void 0, void 0, void 0, function* () {
        yield yandexHome_1.homeMeth.loginPlz('AutotestUser', 'AutotestUser123');
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.navMusic);
        yield yandexHome_1.homeMeth.putText(yandexHome_1.yandexHome.musicSearch, 'beyonce');
        protractor_1.browser.sleep(5000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.musicFirst);
        protractor_1.browser.sleep(5000);
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.firstTrack);
        let x = protractor_1.browser.getTitle();
        yield yandexHome_1.homeMeth.clickButton(yandexHome_1.yandexHome.firstTrack);
        let xl = protractor_1.browser.getTitle();
        expect(x).toContain('Halo — Beyoncé');
        expect(xl).toContain('Beyoncé — слушать онлайн на Яндекс.Музыке');
    }));
}));
