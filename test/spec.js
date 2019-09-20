import {Action} from "../pageObject/home.methods";

const geoPageYan = require('../pageObject/geo.pageObject.js');

 describe('Change location and check more tab', function () {
    const geoPage = new geoPageYan();

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://yandex.by/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Яндекс');
    });

    fit('should click on location button', async function () {
        await Action.saveLocation();
        browser.sleep(5000);
    });

    it('should select location as London and save it', async function () {
        await homePage.location.click();
        await geoPage.city.clear();
        await geoPage.city.sendKeys('Лондон');
        browser.sleep(3500);
        await geoPage.dropdownFirstEl.click();
        browser.sleep(3000);
    });

     it('should check the more tab and get elements from it', async function () {
         await homePage.moreTab.click();
         let elabi = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
         let elabi2 = await elabi.getText();
         console.log(elabi2);
         browser.sleep(3000);
     });

     it('should change location to Paris and compaire more tabs', async function () {
         await homePage.moreTab.click();
         let elabi = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
         let elabi2 = await elabi.getText();
         browser.sleep(3000);
         await homePage.location.click();
         await geoPage.city.clear();
         await geoPage.city.sendKeys('Париж');
         browser.sleep(3500);
         await geoPage.dropdownFirstEl.click();
         browser.sleep(3000);
         await homePage.moreTab.click();
         let elabi3 = element.all(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"));
         let elabi4 = await elabi3.getText();
         await expect(elabi2).toEqual(elabi4);
         browser.sleep(3000);

     });


 });
