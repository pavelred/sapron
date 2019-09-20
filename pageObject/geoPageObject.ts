import {by, element} from "protractor";


export const geoPageYan = {
    city: element(by.css("#city__front-input")),
    dropdownFirstEl: element(by.xpath("//li[1]"))
};
