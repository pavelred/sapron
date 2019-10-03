"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
    },
    framework: 'jasmine2',
    specs: ['./test/pull2.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
};
