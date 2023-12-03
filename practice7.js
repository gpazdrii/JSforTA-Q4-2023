// Task 1
// a)
const newWindow = window.open('', '', 'width=300 height = 300')

// b)
setTimeout(function () {
  newWindow.resizeTo(500, 500)
}, 2000)

// c)
setTimeout(function () {
  newWindow.moveTo(200, 200)
}, 2000)

// d)
setTimeout(function () {
  newWindow.close()
}, 2000)

// Task 2
function changeCSS () {
  const p = document.querySelector('#text')
  p.style.color = 'orange'
  p.style.fontSize = '20ps'
  p.style.fontFamily = 'Comic Sans MS'
}

// Task 3
const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')
const link = document.createElement('a')

document.querySelector('button').after(button1)
button1.innerHTML = 'Click to make the page blue'
button1.addEventListener('click', function () {
  document.body.style.background = 'blue'
})

button1.after(button2)
button2.innerHTML = 'Double-click to make the page pink'
button2.addEventListener('dblclick', function () {
  document.body.style.background = 'pink'
})

let mouseDown = false
button2.after(button3)
button3.innerHTML = 'Click and hold to make the page brown'
button3.addEventListener('mousedown', function () {
  mouseDown = true
  setTimeout(function () {
    if (mouseDown) document.body.style.background = 'brown'
  }, 5000)
})

button3.addEventListener('mouseup', function () {
  mouseDown = false
  document.body.style.background = 'white'
})

button3.after(link)
link.innerHTML = 'Hover over to make the page yellow'
link.href = 'google.com'
link.addEventListener('pointerover', function () {
  document.body.style.background = 'yellow'
})

link.addEventListener('pointerleave', function () {
  document.body.style.background = 'white'
})

// Task 4
document.querySelector('#delete').addEventListener('click', function () {
  document.querySelector('#names').selectedOptions[0].remove()
})

// Task 5
const liveButton = document.querySelector('#live')

liveButton.addEventListener('mouseover', function () {
  const p = document.createElement('p')
  document.querySelector('#messages').appendChild(p)
  p.innerHTML = 'Mouse on me!'
})

liveButton.addEventListener('mouseleave', function () {
  const p = document.createElement('p')
  document.querySelector('#messages').appendChild(p)
  p.innerHTML = 'Mouse is not on me!'
})

liveButton.addEventListener('click', function () {
  const p = document.createElement('p')
  document.querySelector('#messages').appendChild(p)
  p.innerHTML = 'I was pressed!'
})

// Task 6
const newWin = window.open('', '', 'width=300 height = 300')

newWin.addEventListener('resize', function () {
  const body = newWin.document.querySelector('body')
  const p = newWin.document.createElement('p')
  body.appendChild(p)
  p.innerHTML = 'Width: ' + newWin.innerWidth + ', ' + 'Height: ' + newWin.innerHeight
})

// Task 7
const citiesUSA = ['New-Yourk', 'Boston']
const citiesGermany = ['Berlin', 'Munich']
const citiesUkraine = ['Lviv', 'Kyiv']

const selectCountries = document.querySelector('#country')
const selectCities = document.querySelector('#cities')

const p = document.createElement('p')
p.setAttribute('id', 'description')
selectCities.after(p)

selectCountries.addEventListener('change', function () {
  const selectedCountry = selectCountries.selectedOptions[0].innerHTML

  clearSelect()

  if (selectedCountry === 'Ukraine') {
    addOptionsToSelect(selectCities, citiesUkraine)
    showCountry(selectedCountry, citiesUkraine)
  }
  if (selectedCountry === 'USA') {
    addOptionsToSelect(selectCities, citiesUSA)
    showCountry(selectedCountry, citiesUSA)
  }
  if (selectedCountry === 'Germany') {
    addOptionsToSelect(selectCities, citiesGermany)
    showCountry(selectedCountry, citiesGermany)
  }
})

function clearSelect () {
  [...document.querySelector('#cities').options].map((x) => x.remove())
}

function addOptionsToSelect (select, options) {
  for (let i = 0; i < options.length; i++) {
    const opt = document.createElement('option')
    opt.value = options[i]
    opt.innerHTML = options[i]
    select.appendChild(opt)
  }
}

function showCountry (country, cities) {
  document.querySelector('#description').innerHTML = country + ', ' + cities.join(',')
}
