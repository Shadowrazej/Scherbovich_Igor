exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['spec.js']

    /*
    Как несколько сценариев записать на выполнение? Все тесты писать в одном сценарии?(как? через it?)
     */

    };