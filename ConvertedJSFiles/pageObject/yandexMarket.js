"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.market = {
    checkBox4Ram: protractor_1.element(protractor_1.by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']')),
    radioBtn4Stars: protractor_1.element(protractor_1.by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\']')),
    globalSearch: protractor_1.element(protractor_1.by.css('#header-search')),
    globalSearchText: protractor_1.element(protractor_1.by.css('.suggest2-autocomplete__entered')),
    searchButton: protractor_1.element(protractor_1.by.css('[type=\'submit\'][role=\'button\']')),
    iphoneXR: protractor_1.element(protractor_1.by.css('[href=\'/product--smartfon-apple-iphone-xr-64gb/175941311?show-uid=15691661646024169092816001&nid=54726&context=search\']')),
    searchField: protractor_1.element(protractor_1.by.css('#header-search')),
    moneyFromField: protractor_1.element(protractor_1.by.css('#glpricefrom'))
};
