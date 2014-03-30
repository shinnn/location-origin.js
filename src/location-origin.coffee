loc = window.location

unless loc.origin
  value = "
  #{ loc.protocol }//#{ loc.hostname }#{ if loc.port then ":#{ loc.port }" else '' }
  "

  try
    Object.defineProperty loc, 'origin', {value, enumerable: true}
  catch
    loc.origin = value
