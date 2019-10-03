import {Config} from 'protractor';
export let config: Config = {
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