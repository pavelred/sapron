import {browser, Config} from 'protractor';
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

export let config: Config = {


    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [ "--headless"],
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': '/download'
                }
            }
        }
    },

    framework: 'jasmine2',
    specs: ['./test/pull.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },



    onPrepare: () => {

        /*
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });


         */

        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);

    }
};