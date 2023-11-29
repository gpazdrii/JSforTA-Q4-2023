// Task 1
document.getElementById('test').innerHTML = 'Last'
document.querySelector('#test').innerHTML = 'Last Again'

// Task 2
document.querySelector('.image').setAttribute('src', 'cat.jpg')
alert(document.querySelector('.image').outerHTML)

// Task 3
const allParagraphs = document.querySelectorAll('#text p')
allParagraphs.forEach(function (p, index) { console.log('Selector text ' + index + ': ' + p.innerHTML) })

// Task 4
const list = document.querySelector('#list')
const firstChild = list.firstElementChild.innerHTML
const lastChild1 = list.lastElementChild.innerHTML
const lastChild2 = list.children[list.children.length - 1].innerHTML
const secondChild = list.firstElementChild.nextElementSibling.innerHTML
const fourthChild = list.children[3].innerHTML
const thirdChild = list.children[2].innerHTML

console.log(`${firstChild}, ${lastChild1}, ${lastChild2}, ${secondChild}, ${fourthChild}, ${thirdChild}`)

// Task 5
document.querySelector('span').hidden = true
document.querySelector('h1').style.backgroundColor = '#03C04A'
document.querySelector('h1').style.fontSize = '46px'
document.getElementById('myDiv').children[0].style.fontWeight = 'bold'
document.getElementById('myDiv').children[0].style.fontSize = '26px'
document.getElementById('myDiv').children[1].style.fontSize = '26px'
document.getElementById('myDiv').children[1].style.color = 'red'
document.getElementById('myDiv').children[2].style.fontSize = '26px'
document.getElementById('myDiv').children[2].style.textDecoration = 'underline'
document.getElementById('myDiv').children[3].style.fontSize = '26px'
document.getElementById('myDiv').children[3].style.fontStyle = 'italic'
document.getElementById('myList').style.fontSize = '26px'
document.getElementById('myList').style.display = 'flex'
document.getElementById('myList').style.listStyleType = 'none'

// Task 6
const message1 = prompt('Please enter message 1')
const message2 = prompt('Please enter message 2')

document.getElementById('input1').value = message1
document.getElementById('input2').value = message2

const input1Value = document.getElementById('input1').value
const input2Value = document.getElementById('input2').value

document.getElementById('input1').value = input2Value
document.getElementById('input2').value = input1Value

// Task 7
// document.querySelector('script')
//   .insertAdjacentHTML('beforebegin', '<body> <main class= "mainClass check item"><div id="myDiv" <p>First paragraph</p></div></main> </body>')
const body = document.createElement('body')
const main = document.createElement('main')
const div = document.createElement('div')
const p = document.createElement('p')

document.querySelector('#input2').after(body)
body.appendChild(main)
main.className = ' mainClass check item '
main.appendChild(div)
div.setAttribute('id', 'myDiv')
div.appendChild(p)
p.innerHTML = 'First paragraph'
