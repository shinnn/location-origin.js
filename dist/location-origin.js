/*!
 * location-origin.js | (c) Shinnosuke Watanabe, MIT
 * https://github.com/shinnn/location-origin.js
*/
(function() {
  var loc, value;

  loc = window.location;

  if (!loc.origin) {
    value = "" + loc.protocol + "//" + loc.hostname + (loc.port ? ":" + loc.port : '');
    try {
      Object.defineProperty(loc, 'origin', {
        value: value,
        enumerable: true
      });
    } catch (_error) {
      loc.origin = value;
    }
  }

}).call(this);
