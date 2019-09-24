import {by, element} from "protractor";

export const market = {
    checkBox4Ram: element(by.css('input[type=\'checkbox\'][tabindex=\'0\'][name=\'Оперативная память 4 Гб\']')),
    radioBtn4Stars: element(by.css('[type=\'radio\'][tabindex=\'0\'][name=\'Рейтинг магазина\']')),
    globalSearch: element(by.css('#header-search')),
    globalSearchText: element(by.css('.suggest2-autocomplete__entered')),
    searchButton: element(by.css('[type=\'submit\'][role=\'button\']')),
    iphoneXR: element(by.css('[href=\'/product--smartfon-apple-iphone-xr-64gb/175941311?show-uid=15691661646024169092816001&nid=54726&context=search\']')),
    searchField: element(by.css('#header-search')),
    moneyFromField: element(by.css('#glpricefrom')),
    dropdownList: element(by.css('.suggest2-rich-item__text'))
};


