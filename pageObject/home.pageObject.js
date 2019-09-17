/* Page Object for Home page */

const homePageYan = function () {
    this.location = element(by.css('span.geolink__reg'));
    this.moreTab = element(by.css(".home-tabs a[href=\'https://yandex.by/all\']"));
    //this.moreTabList = element(by.css(".home-tabs__more .home-tabs__more-top .home-tabs__more-item[role='menuitem'] a.home-link_black_yes"))
};

module.exports = homePageYan;
