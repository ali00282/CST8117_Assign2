// localStorage
localStorage.setItem('name', 'localStorage')
console.log(localStorage.getItem('name'))

// sessionStorage
sessionStorage.setItem('name', 'sessionStorage')
console.log(sessionStorage.getItem('name'))

// cookie

document.cookie = 'name=Cookies; expires=' + new Date(2020,0,10).toUTCString()
document.cookie = 'lastName=albadry; expires=' + new Date(2020,0,10).toUTCString()

console.log(document.cookie)

// Assign the js-cookie api to a different variable and restore the original "window.Cookies"
var Cookies2 = Cookies.noConflict()
Cookies2.set('cookies', 'true')

document.cookie = 'name=; expires=' + new Date(2020,0,10).toUTCString()

Cookies.set('name', 'value', { secure: true })
Cookies.get('name') // => 'value'
Cookies.remove('name')

document.cookie = 'escaped=%u5317'
document.cookie = 'default=%E5%8C%97'
var cookies = Cookies.withConverter({
  read: function (value, name) {
    if (name === 'escaped') {
      return unescape(value)
    }
    // Fall back to default for all other cookies
    return Cookies.converter.read(value, name)
  }
})
cookies.get('escaped') // 北
cookies.get('default') // 北
cookies.get() // { escaped: '北', default: '北' }

Cookies.withConverter({
    write: function (value, name) {
      return value.toUpperCase()
    }
  })