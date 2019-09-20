import {by, element} from "protractor";

export const homePageYan = {
    location: element(by.css('span.geolink__reg')),
    moreTab: element(by.css(".home-tabs a[href=\'https://yandex.by/all\']"))
};



