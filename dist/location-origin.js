/*!
 * location-origin.js | (c) Shinnosuke Watanabe, MIT
 * https://github.com/shinnn/location-origin.js
*/
(function() {
  var loc, value;

  loc = window.location;

  if (!loc.origin) {
    value = "" + loc.protocol + "//" + loc.hostname + (loc.port ? ":" + loc.port : '');
    if (!(typeof Object.defineProperty === "function" ? Object.defineProperty(loc, 'origin', {
      value: value,
      enumerable: true
    }) : void 0)) {
      loc.origin = value;
    }
  }

}).call(this);
