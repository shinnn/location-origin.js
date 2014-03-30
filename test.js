require('./dist/location-origin.js');
var test = require('tape');

test('simple comparisons', function(t) {
  t.plan(1);
  var expected = window.location.protocol + '//' +
                 window.location.hostname +
                 (window.location.port ? ':' + window.location.port: '');
  
  t.equal(location.origin, expected);
});
