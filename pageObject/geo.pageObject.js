/* Page Object for Location setting page */

const geoPageYan = function () {
    this.city = element(by.css("#city__front-input"));
    this.dropdownFirstEl = element(by.xpath("//li[1]"));
};

module.exports = geoPageYan;