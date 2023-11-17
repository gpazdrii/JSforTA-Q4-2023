// Task 1
const myArray = [2, 3, 4, 5]
let product1 = 1

for (let i = 0; i < myArray.length; i++) {
  product1 *= myArray[i]
}
console.log(product1)

let product2 = 1
let i = 0
while (i < myArray.length) {
  product2 *= myArray[i]
  i++
}
console.log(product2)

// Task 2
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`)
  } else {
    console.log(`${i} is odd`)
  }
}

// Task 3
function randArray (k) {
  const randomNumbers = []
  for (let i = 0; i < k; i++) {
    randomNumbers.push(Math.floor(Math.random() * 501) + 1)
  }
  return randomNumbers
}
console.log(randArray(5))

// Task 4
const raiseToDegree = function (value, power) {
  return Math.pow(value, power)
}

function promptToEnterInteger (valueName) {
  let enteredNumber

  do {
    enteredNumber = prompt(`Please enter an integer value: ${valueName}`)
  } while (enteredNumber === '' || !Number.isInteger(+enteredNumber))

  return enteredNumber
}

const baseValue = promptToEnterInteger('baseValue')
const powerValue = promptToEnterInteger('powerValue')

const result = raiseToDegree(baseValue, powerValue)
alert(`${baseValue} to the power of ${powerValue} is ${result}`)

// Task 5
function findMin () {
  let minValue = arguments[0]

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < minValue) minValue = arguments[i]
  }
  return minValue
}

const minimumValue = findMin(12, 14, 4, -4, 0.2)
console.log(minimumValue)

// Task 6
function findUnique (arr) {
  let isUnique = true

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr.includes(arr[i], i + 1)) {
      isUnique = false
      break
    }
  }
  return isUnique
}

console.log(findUnique([1, 2, 3, 5, 3]))
console.log(findUnique([1, 2, 3, 5, 11]))

// Task 7
function lastElem (arr, elNumber) {
  if (elNumber == undefined) {
    elNumber = 1
    return arr[arr.length - 1]
  } else {
    return arr.slice(-elNumber)
  }
}

console.log(lastElem([3, 4, 10, -5]))
console.log(lastElem([3, 4, 10, -5], 2))
console.log(lastElem([3, 4, 10, -5], 8))

// Task 8
function toUpperCase (str) {
  const arr = str.split(' ')
  let finalStr = ''

  for (const a of arr) {
    finalStr = finalStr + ' ' + a[0].toUpperCase() + a.slice(1)
  }

  return finalStr.trim()
}

console.log(toUpperCase('i love java script'));
