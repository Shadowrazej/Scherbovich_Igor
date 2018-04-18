describe('angularjs homepage todo list', function() {
    beforeEach(function () {
        browser.get('https://angular.io/docs');
    });

    var pageObject = require('./pageObject.js');

    /**
     * При открытии подменю класс collapsed изменяется на expanded, таким способом проверил: открылось ли подменю.
     */
    it('Test submenu', function () {
        pageObject.buttonMenu.click();
        pageObject.buttonTutorial.click();
        expect(pageObject.elementTestExpand1.getAttribute('class')).toEqual('vertical-menu-item heading ng-star-inserted level-1 expanded');
    });

    /**
     * Открываем меню > подменю tutorial > закрываем меню > открываем меню.
     * Подменю tutorial осталось открытым
     */
    it('Test menu with submenu', function () {
        pageObject.buttonMenu.click();
        pageObject.buttonTutorial.click();
        pageObject.buttonMenu.click();
        pageObject.buttonMenu.click();
        expect(pageObject.elementTestExpand1.getAttribute('class')).toEqual('vertical-menu-item heading ng-star-inserted level-1 expanded');
    });

    /**
     * Открываем меню > подменю tutorial > открываем Introduction > закрываем меню > открываем меню.
     * Подменю tutorial осталось открытым
     * При клике на Introduction в значение атрибута class добавляется 'selected'
     */
    it('Test menu with submenu', function () {
        pageObject.buttonMenu.click();
        pageObject.buttonTutorial.click();
        pageObject.buttonIntroduction.click();
        pageObject.buttonMenu.click();
        pageObject.buttonMenu.click();
        expect(pageObject.elementTestExpand2.getAttribute('class')).toEqual('vertical-menu-item level-2 expanded selected');
    });

    /**
     * Проверяем всплывающее название(title)
     */
    it ('Test browser title', function() {
        expect(pageObject.getBrowserTitle()).toEqual('Angular - What is Angular?');
    });

    /**
     * Проверяем всплывающее название(title) строчного элемента
     */
    it ('Test element title', function() {
        var elem = pageObject.getLinkLineElement('a', 'modules');
        expect(pageObject.getTitle(elem)).toEqual('ES2015 Modules');
    });

    /**
     * Тест блочной ссылки
     */
    it ('Test block link', function() {
        pageObject.linkBlockElement.click();
        expect(pageObject.getBrowserTitle()).toEqual('Angular - QuickStart');
    });

    /**
     * Test Angular home page
     */
    it ('Test Angular home link', function() {
        pageObject.angularHomeButton.click();
        expect(pageObject.getBrowserTitle()).toEqual('Angular');
    });

    /**
     * Тест смены языка на китайский
     */
    it ('Test china language', function() {
        pageObject.chinaLanguage.click();
        expect(pageObject.getBrowserCurrentUrl()).toBe('https://angular.cn/');
    });

    /**
     * При вводе в строке поиска валидного значения появляется подменю(появляется <h2>Search Results</h2>)
     */
    it('Test search field', function () {
        pageObject.searchField.click();
        pageObject.searchField.sendKeys('angular');
        browser.sleep(1500);
        expect(pageObject.searchResultsElement.isPresent()).toBe(true);
    });

    /**
     * При вводе в строке поиска не валидного значения появляется подменю(появляется <p>No results found.</p>)
     */
    it('Test search field', function () {
        pageObject.searchField.click();
        pageObject.searchField.sendKeys('asdasdqwe');
        browser.sleep(1500);
        expect(pageObject.searchNoResultsElement.isPresent()).toBe(true);
    });

    /**
     * Тест перехода по ссылке в меню поиска
     */
    it('Test search field', function () {
        pageObject.searchField.click();
        pageObject.searchField.sendKeys('angular');
        browser.sleep(1500);
        element(by.cssContainingText('a', 'setAngularJSGlobal()')).click();
        expect(pageObject.getBrowserTitle()).toEqual('Angular - setAngularJSGlobal');
    });


    /**
     * Ошибка: нет ангуляра?
     *
     * it ('Test links', function() {
        element(by.cssContainingText('a', 'JavaScript')).click();
        expect(browser.getTitle()).toEqual('A re-introduction to JavaScript (JS tutorial) - JavaScript | MDN');
       });
     */




});