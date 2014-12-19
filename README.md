# location-origin.js

[![Bower version](https://img.shields.io/bower/v/location-origin.svg?style=flat)](https://github.com/shinnn/location-origin.js/releases)
[![NPM version](https://img.shields.io/npm/v/location-origin.svg?style=flat)](https://www.npmjs.com/package/location-origin)
[![Build Status](https://img.shields.io/travis/shinnn/location-origin.js.svg?style=flat)](https://travis-ci.org/shinnn/location-origin.js)
[![devDependency Status](https://david-dm.org/shinnn/location-origin.js/dev-status.svg?style=flat)](https://david-dm.org/shinnn/location-origin.js#info=devDependencies)

[![browser support](https://ci.testling.com/shinnn/location-origin.js.png)](https://ci.testling.com/shinnn/location-origin.js)

Polyfill for [`window.location.origin`](https://url.spec.whatwg.org/#dom-urlutilsreadonly-origin)

```javascript
// On http://localhost:8888/path/to/page.html#hash?search=foobar

window.location.origin; //=> "http://localhost:8888"
```

## Installation

### Package managers

#### [Bower](http://bower.io/)

```sh
bower install location-origin
```

#### [npm](https://www.npmjs.com/)

```sh
npm install location-origin
```

#### [Duo](http://duojs.org/)

```javascript
// You don't have to assign it to a variable.
// It automatically adds `origin` property to the window.location object when it is `require`d.
require("shinnn/location-origin.js");
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/location-origin.js/master/dist/location-origin.js "view raw")

## Acknowledgements

I used [the blog post by Toby Osbourn](http://tosbourn.com/2013/08/javascript/a-fix-for-window-location-origin-in-internet-explorer/ "A fix for window.location.origin in Internet Explorer") as reference.
Thanks, [tosbourn](https://github.com/tosbourn).

## License

[src/location-origin.coffee](./src/location-origin.coffee) and [dist/location-origin.js](./dist/location-origin.js) are licensed under [the Unlicense](./LICENSE-UNLICENSE).

All other source code is licensed under [the MIT license](./LICENSE-MIT).
