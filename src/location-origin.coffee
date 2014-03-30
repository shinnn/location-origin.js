loc = window.location

unless loc.origin
  value = "
  #{ loc.protocol }//#{ loc.hostname }#{ if loc.port then ":#{ loc.port }" else '' }
  "

  unless Object.defineProperty? loc, 'origin', {value, enumerable: true}
    loc.origin = value
