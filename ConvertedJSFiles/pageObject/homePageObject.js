"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.homePageYan = {
    location: protractor_1.element(protractor_1.by.css('span.geolink__reg')),
    //moreTab: element(by.css(".home-tabs a[href=\'https://yandex.by/all\']")),
    moreTab: protractor_1.element(protractor_1.by.css('[role=\'navigation\'] [data-statlog=\'tabs.more\']'))
};
