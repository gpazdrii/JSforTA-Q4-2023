// Task 1
alert('Hanna Barna')

// Task 2
console.log('Barna');

// Task 3
// a)
var variable1;
let variable2;

// b)
variable1 = 'Hello world';
variable2 = 123;

// c)
console.log(variable1);
console.log(variable2);

// d)
var variable3;
variable3 = variable1;

// e)
console.log(variable1);
console.log(variable2);
console.log(variable3);

// Task 4
myObject = {
    name: 'John Doe',
    age: 30,
    availableByPhone: true,
    maritalStatus: undefined,
    gender: null
}

console.log(myObject);

// Task 5
isAdult = confirm('Are you an Adult?')
console.log(isAdult)

// Task 6
let firstName, lastName, studyGroup, yearOfBirth;

firstName = 'Hanna';
lastName = 'Barna';
studyGroup = 'JavaScript for TA [Q4, 2023]';
yearOfBirth = 1989;

let maritalStatus = true;

console.log(yearOfBirth);
console.log(maritalStatus);
console.log(firstName);
console.log(lastName);
console.log(studyGroup);

let occupation = null;
let idCard = undefined;

console.log(occupation);
console.log(idCard);

// Task 7
let email, login, password;
email = prompt('Please provide your email: ');
login = prompt('Please provide your login: ');
password = prompt('Please provider your password: ');

alert(`Dear ${login}, your email is ${email}, your password is ${password}.`)

// Task 8
const secondInMinute = 60;

let secondInHour, secondInDay, secondInMonth;

secondInHour = secondInMinute * 60;
secondInDay = secondInHour * 24;
secondInMonth = secondInDay * 30;

alert(`The number of seconds in an hour ${secondInHour}`);
alert(`The number of seconds in a day ${secondInDay}`);
alert(`The number of seconds in a month ${secondInMonth}`);

console.log(`The number of seconds in an hour ${secondInHour}`);
console.log(`The number of seconds in a day ${secondInDay}`);
console.log(`The number of seconds in a month ${secondInMonth}`);
