describe('Assertions', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));


    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(latestResult.getText()).toEqual('3');
    });

    it('сравнение строк', function() {
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);
        goButton.click();
        latestResult.getText().then(console.log);
        expect(latestResult.getText()).toEqual('10'); //сравнение строк

    });

    it('сравнение двух чисел', async function() {
        await firstNumber.sendKeys(1);
        await expect (Number(await firstNumber.getAttribute('value'))).toEqual(1);
    });

    it('сравнение двух строк на частичное совпадение', async function () {
        await firstNumber.sendKeys('google');
        await expect(await firstNumber.getAttribute('value')).toContain('goo');
    });

    it('сравнение массивов', async function () {
        let arr1 = [1,2,3,4,5];
        let arr2 = [1,2,3,4,5];
        await expect(arr1).toEqual(arr2);
    });

    fit('сравнение массива строк', async function () {
        let arr1 = ['1','2','3','4','hi'];
        let arr2 = ['1','2','3','4','5'];
        await expect(arr1).toEqual(arr2);
    });

});