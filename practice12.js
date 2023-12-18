// Task 1
function upperCase (str) {
  if ((/^[A-Z]/).test(str)) return 'String starts with uppercase character'
  return 'String does not start with uppercase character'
}

console.log(upperCase('regexp'))
console.log(upperCase('RegExp'))

// Task 2
function checkEmail (email) {
  const emailRegex = /^[0-9A-Za-z]+[._]*[0-9A-Za-z]+@[0-9A-Za-z]+[._-]*[0-9A-Za-z]+\.[A-Za-z]{2,4}$/
  return emailRegex.test(email)
}

console.log(checkEmail('Qmail2@gmail.com'))
console.log(checkEmail('Qmail2@gmail'))
console.log(checkEmail('@gmail'))
console.log(checkEmail('2@gmail'))
console.log(checkEmail('Qmail2@'))
console.log(checkEmail('Qma_il2@erer.com'))
console.log(checkEmail('Qma_il2@er-er.com'))
console.log(checkEmail('Qma_r@erer-.com'))
console.log(checkEmail('Qma_@erer-r.com'))
console.log(checkEmail('Qma.ff@ererr.com'))

// Task 3
const result = 'cdbBdbsbz'.match(/d(b+)(d*)/i)
console.log(result)

// Task 4
const str = 'Java Script'
const swappedWords = str.replace(/(\w+) (\w+)/, '$2 $1')
console.log(swappedWords)

// Task 5
function isCardValid (cardNumber) {
  return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)
}

console.log('Cards:')
console.log(isCardValid('wew-we-we-er'))
console.log(isCardValid('9999-9999-9999-9999'))
console.log(isCardValid('9999-9999-9999'))
console.log(isCardValid('9999'))
console.log(isCardValid('999-999-9999-9999'))

// Task 6
function verifyEmail (email) {
  return /^[A-Za-z0-9]+\w*-?\w+[^_]@[A-Za-z0-9]+.[A-Za-z0-9]{2,4}$/.test(email)
}

console.log('Emails:')
console.log(verifyEmail('my_mail@gmail.com'))
console.log(verifyEmail('#my_mail@gmail.com'))
console.log(verifyEmail('my_ma--il@gmail.com'))
console.log(verifyEmail('my_makk_il@gmail.com'))
console.log(verifyEmail('my_makki-l@gmail.com'))
console.log(verifyEmail('mymakkil@gmail.com'))
console.log(verifyEmail('mymakkil-@gmail.com'))
console.log(verifyEmail('mymakkil_@gmail.com'))

// Task 7
function checkLogin (login) {
  const isLoginValid = /^[A-Za-z]+[A-Za-z0-9.]*[^.]$/.test(login)
  const numbers = login.match(/(\d+\.\d+)|(\d+)/g)
  const res = new Map([[isLoginValid, numbers]])
  return res
}

console.log('Logins:')
console.log(checkLogin('ee1.1ret3'))
console.log(checkLogin('ee1*1ret3'))
