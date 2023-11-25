// Task 1
function propsCount (currentObject) {
  return Object.keys(currentObject).length
}

const mentor = {
  course: 'JS fundamental',
  duration: 3,
  direction: 'web development'
}

console.log(propsCount(mentor))

// Task 2
const myObject = {
  key1: 'value1',
  key2: true,
  key3: 12,
  key4: [1, 2, 3],
  key5: null
}

function showProps (obj) {
  const arrProperties = Object.keys(obj).map((k) => `${k}: ${obj[k]}`)
  const arrPropertiesValues = Object.keys(obj).map((k) => obj[k])

  console.log(arrProperties)
  console.log(arrPropertiesValues)
}

showProps(myObject)

// Task 3
class Person {
  constructor (name, surname) {
    this.name = name
    this.surname = surname
  }

  showFullName () {
    return `${this.name} ${this.surname}`
  }
}

const obj = new Person('John', 'Doe')
console.log(obj.showFullName())

class Student extends Person {
  constructor (name, surname, year) {
    super(name, surname)
    this.addmissionYear = year
  }

  showFullName (middleName) {
    return `${this.name} ${middleName} ${this.surname}`
  }

  showCourse () {
    const currentDate = new Date()
    return Number(currentDate.getFullYear()) - Number(this.addmissionYear)
  }
}

const stud1 = new Student('Petro', 'Petrenko', 2017)
console.log(stud1.showFullName(' Petrovych '))
console.log('Current course: ' + stud1.showCourse())

// Task 4
class Worker {
  #experience = 1.2

  constructor (fullName, dayRate, workingDays) {
    this.fullName = fullName
    this.dayRate = dayRate
    this.workingDays = workingDays
  }

  showSalary () {
    return Number(this.dayRate * this.workingDays)
  }

  showSalaryWithExperience () {
    return Number(this.showSalary() * this.#experience)
  }

  get experience () {
    return this.#experience
  }

  set experience (exp) {
    this.#experience = exp
  }
}

const worker = new Worker('John Doe', 100, 40)
console.log(worker.fullName)
console.log(worker.showSalary())
console.log(worker.experience)
console.log(worker.showSalaryWithExperience())
worker.experience = 1.5
console.log(worker.experience)
console.log(worker.showSalaryWithExperience())

const worker1 = new Worker('John Johnson', 20, 23)
console.log(worker1.fullName)
console.log(worker1.fullName + ' salary: ' + worker1.showSalary())
console.log('New experience: ' + worker1.experience)
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience())
worker1.experience = 1.5
console.log('New experience: ' + worker1.experience)
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience())

const worker2 = new Worker('Tom Thomson', 48, 22)
console.log(worker2.fullName)
console.log(worker2.fullName + ' salary: ' + worker2.showSalary())
console.log('New experience: ' + worker2.experience)
console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience())
worker2.experience = 1.5
console.log('New experience: ' + worker2.experience)
console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience())

const worker3 = new Worker('Andy Ander', 29, 23)
console.log(worker3.fullName)
console.log(worker3.fullName + ' salary: ' + worker3.showSalary())
console.log('New experience: ' + worker3.experience)
console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience())
worker3.experience = 1.5
console.log('New experience: ' + worker3.experience)
console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience())

function sortBySalary (arrWorkers) {
  return arrWorkers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience())
}

const allWorkers = [worker1, worker2, worker3]
const sortedWorkers = sortBySalary(allWorkers)
console.log('Sorted salary:')
sortedWorkers.map((w) => console.log(`${w.fullName}: ${w.showSalaryWithExperience()}`))

function sortBy (arrWorkers, key) {
  arrWorkers.sort(function (a, b) {
    if (a[key] < b[key]) { return -1 }
    if (a[key] > b[key]) { return 1 }
    return 0
  })
  return arrWorkers
}

const allWorkers2 = [worker1, worker2, worker3]
const sortedByDayRate = sortBy(allWorkers2, 'dayRate')
console.log(sortedByDayRate)

// Task 5 additional
class GeometricFigure {
  getArea () {
    return 0
  }

  toString () {
    return Object.getPrototypeOf(this).constructor.name
  }
}

class Triangle extends GeometricFigure {
  constructor (height, base) {
    super()
    this.height = height
    this.base = base
  }

  getArea () {
    return Number((this.height * this.base) / 2)
  }
}

class Square extends GeometricFigure {
  constructor (side) {
    super()
    this.side = side
  }

  getArea () {
    return Number(this.side * this.side)
  }
}

class Circle extends GeometricFigure {
  #pi = 3.14

  constructor (radius) {
    super()
    this.radius = radius
  }

  getArea () {
    return Number(this.#pi * this.radius * this.radius)
  }
}

function handleFigures (figures) {
  const res = []

  for (const f of figures) {
    if (f instanceof GeometricFigure) {
      const parent = new GeometricFigure()
      const parentString = parent.toString()
      res.push(parentString + ' ' + f.toString() + ' - area: ' + f.getArea())
    }
  }

  const area = figures.reduce(function (r, v) {
    r += v.getArea()
    return r
  }, 0)

  res.push(area)

  return res
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)]
console.log(handleFigures(figures))
