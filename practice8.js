// Task 1
const arr = ['Tom', 'Sam', 'Ray', 'Bob']
const [x, y, , ...z] = arr
console.log(x) // "Tom"
console.log(y) // "Sam"
console.log(z) // [Bob]

// Task 2
const data = {
  names: ['Sam', 'Tom', 'Ray', 'Bob'],
  ages: [20, 24, 22, 26]
}

const { names: [, name2, , name4], ages: [, age2, , age4] } = data
console.log(name2) // "Tom"
console.log(age2) // 24
console.log(name4) // "Bob"
console.log(age4) // 26

// Task 3
function mul (...values) {
  const receivedNumbers = values.filter((v) => typeof v === 'number')

  if (receivedNumbers.length > 0) return receivedNumbers.reduce((res, current) => res * current, 1)
  return 0
}
console.log(mul(1, 'str', 2, 3, true)) // 6
console.log(mul(null, 'str', false, true)) // 0

// Task 4
const server = {
  data: 0,
  convertToString: function (func) {
    func(() => this.data + '')
  }
}
const client = {
  server,
  result: '',
  calc: function (data) {
    this.server.data = data
    this.server.convertToString(this.notification())
  },
  notification: function () {
    return (callback) => {
      this.result = callback()
    }
  }
}
client.calc(123)
console.log(client.result) // "123"
console.log(typeof client.result) // "string"

// Task 5
function mapBuilder (keysArray, valuesArrays) {
  const keyValues = new Map()

  for (let i = 0; i < keysArray.length; i++) {
    keyValues.set(keysArray[i], valuesArrays[i])
  }

  return keyValues
}

const keys = [1, 2, 3, 4]
const values = ['div', 'span', 'b', ' i ']
const map = mapBuilder(keys, values)
console.log(map.size) // 4
console.log(map.get(2)) // "span"
