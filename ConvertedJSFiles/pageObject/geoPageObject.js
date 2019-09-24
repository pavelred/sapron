"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.geoPageYan = {
    city: protractor_1.element(protractor_1.by.css("#city__front-input")),
    dropdownFirstEl: protractor_1.element(protractor_1.by.xpath("//li[1]"))
};
