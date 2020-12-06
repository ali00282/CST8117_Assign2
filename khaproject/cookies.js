// localStorage
localStorage.setItem('name', 'localStorage')
console.log(localStorage.getItem('name'))

// sessionStorage
sessionStorage.setItem('name', 'sessionStorage')
console.log(sessionStorage.getItem('name'))

// cookie

document.cookie = 'name=Cookies; expires=' + new Date(2020,0,10).toUTCString()
document.cookie = 'lastName=albadry; expires=' + new Date(2020,0,10).toUTCString()
document.cookie = 'lastName=IEatCokies; expires=' + new Date(2020,0,10).toUTCString()

console.log(document.cookie)

// Assign the js-cookie api to a different variable and restore the original "window.Cookies"
var Cookies2 = Cookies.noConflict()
Cookies2.set('cookies', 'true')

document.cookie = 'name=; expires=' + new Date(2020,0,10).toUTCString()

Cookies.set('name', 'true', { secure: true })
Cookies.get('name') // => 'true'
Cookies.remove('name')
