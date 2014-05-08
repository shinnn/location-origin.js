# location-origin.js
# Released under the Unlicense
# https://github.com/shinnn/location-origin.js

'use strict'

loc = window.location

return if loc.origin

value = "
#{ loc.protocol }//#{ loc.hostname }#{ if loc.port then ":#{ loc.port }" else '' }
"
try
  Object.defineProperty loc, 'origin', {value, enumerable: true}
catch
  loc.origin = value
