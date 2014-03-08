var td = require('../index').toDoge;

exports['Returns a string'] = function (test) {
    test.strictEqual(typeof td('This is a test.'), 'string');
    test.done();
}

exports['Strips out stop words'] = function (test) {
    // These are Dewey class names
    test.ok(!td('Libraries for specific subjects').match(' for '));
    test.ok(!td('Bibliographies of individuals').match(' of '));
    test.ok(!td('Administration of the physical plant').match(' the '));
    test.ok(!td('General encyclopedic works in English').match(' in '));
    test.ok(!td('General encyclopedic works in Spanish & Portuguese').match(' & '));
    test.done();
}

exports['Contains Doge words'] = function (test) {
    // just running an arbitrary number of tests here
    test.ok(td('Food & Drink').match(/ ((many)|(much)|(so)|(such)|(very)) /i));
    test.ok(td('Libraries for specific subjects').match(/ ((many)|(much)|(so)|(such)|(very)) /i));
    test.ok(td('Information').match(/((many)|(much)|(so)|(such)|(very)) /i));
    test.done();
}
