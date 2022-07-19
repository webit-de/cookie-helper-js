import Cookie from 'js-cookie'

export function setCookie(key, value) {
  Cookie.set(key, value)
}

export function getCookie(req, key) {
  let cookie

  // server side
  if (req) {
    cookie = req.headers.cookie?.split(';')?.find(cookie => cookie.trim().startsWith(`${key}=`))
  }

  return cookie ? cookie.split('=')[1] : Cookie.get(key)
}

export function removeCookies(keys) {
  keys.forEach(key => {
    removeKeyFromCookie(key)
  })
}

export function removeCookie(key) {
  Cookie.remove(key)
}
