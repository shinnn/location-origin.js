# location-origin.js

[![Bower version](https://badge.fury.io/bo/location-origin.png)](http://badge.fury.io/bo/location-origin)
[![Build Status](https://travis-ci.org/shinnn/location-origin.js.svg?branch=master)](https://travis-ci.org/shinnn/location-origin.js)
[![devDependency Status](https://david-dm.org/shinnn/location-origin.js/dev-status.svg?theme=shields.io)](https://david-dm.org/shinnn/location-origin.js#info=devDependencies)

[![browser support](https://ci.testling.com/shinnn/location-origin.js.png)](https://ci.testling.com/shinnn/location-origin.js)

Polyfill for [`window.location.origin`](http://www.w3schools.com/jsref/prop_loc_origin.asp)

```js
// On http://yourhost:5000/path/to/page

window.location.origin; //=> "http://yourhost:5000"
```

## Installation

### Install with package manager

#### [Bower](http://bower.io/)

```
bower i --save location-origin
```

#### [Component](http://component.io/)

```
component install shinnn/location-origin.js
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/location-origin.js/master/dist/location-origin.js "view raw")

## Acknowledgements

I used [the blog post by Toby Osbourn](http://tosbourn.com/2013/08/javascript/a-fix-for-window-location-origin-in-internet-explorer/ "A fix for window.location.origin in Internet Explorer") as reference.
Thanks, [tosbourn](https://github.com/tosbourn).

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
