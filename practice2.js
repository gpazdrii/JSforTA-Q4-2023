// Task 1
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = !!(x + y);
console.log(res3);
console.log(typeof res3);

let res4 = Number(`${x} ${y}`);
console.log(res4);
console.log(typeof res4);

// Task 2
// a)
let userNumber = +prompt('Please enter even positive number:');

if (userNumber % 2 === 0 && userNumber > 0) {
    console.log(`Your number is correct: ${userNumber} is even and positive`);
} else if (userNumber % 2 === 0 && userNumber < 0) {
    console.log(`Your number is not correct: ${userNumber} is even but not positive`);
} else if (userNumber % 2 !== 0 && userNumber > 0) {
    console.log(`Your number is not correct: ${userNumber} is not even but positive`);
} else if (userNumber % 2 !== 0 && userNumber < 0)  {
    console.log(`Your number is not correct: ${userNumber} is not even and not positive`);
} else if (userNumber === 0) {
    console.log('Your number is not correct: you entered 0');
} else {
    console.log('It is not a number');
}

//b)
let userNumber2 = +prompt('Please enter a multiple of 7 number:');

if (userNumber2 % 7 === 0 && userNumber2 !== 0) {
    console.log(`Entered ${userNumber2} is a multiple of 7. It is correct number.`)
} else {
    console.log(`Entered ${userNumber2} is not a multiple of 7. It is not correct number.`)
}

// Task 3
const simpleArray = new Array();

// 1)
simpleArray[0] = 34;
console.log(simpleArray);
// 2)
simpleArray[1] = 'First item';
console.log(simpleArray);
// 3)
simpleArray[2] = false;
console.log(simpleArray);
// 4)
simpleArray[3] = null;
console.log(simpleArray);
// 5)
alert('Number of elements of an array is: ' + simpleArray.length)
// 6)
let userValue = prompt('Please enter any value:');
simpleArray[4] = userValue;
console.log(simpleArray);
// 7)
alert(`Fifth element of the array is: ${simpleArray[4]}`);
// 8)
simpleArray.shift();
alert(`Array is: ${simpleArray}`);

// Task 4
const cities = [" Rome ", " Lviv ", " Warsaw "];
let arrToStr = cities.join('*');
console.log(arrToStr); 

// Task 5
let isAdult = +prompt('Please enter your age:');
if (isAdult >= 18) {
  alert('You have reached the age of majority');
} else {
  alert('You are still too young');
}

// Task 6
let len1 = +prompt('Please enter length1:');
let len2 = +prompt('Please enter length2:');
let len3 = +prompt('Please enter length3:');

if (len1 > 0 && len2 > 0 && len3 > 0 && !isNaN(len1) && !isNaN(len2) && !isNaN(len3) && (len1 + len2) > len3 && (len2 + len3) > len1 && (len1 + len3) > len2) {
  // a)
  s = (len1 + len2 + len3)/2;
  area = Math.sqrt(s * (s - len1) * (s - len2) * (s - len3));
  console.log(area.toFixed(3));

  // b)
  const triangleSides = new Array()
  triangleSides.push(len1);
  triangleSides.push(len2);
  triangleSides.push(len3);

  triangleSides.sort(function(a, b) { return a - b });

  let cathetus1 = triangleSides[0];
  let cathetus2 = triangleSides[1];
  let hypotenuse = triangleSides[2];

  let hypotenuseSquare = Math.pow(hypotenuse, 2);
  let cathetus1Square = Math.pow(cathetus1, 2);
  let cathetus2Square = Math.pow(cathetus2, 2);

  if (hypotenuseSquare === (cathetus1Square + cathetus2Square)) {
    alert('This triangle is rectangular.');
    alert(`The square of the hypotenuse side ${hypotenuseSquare} is equal to the sum of squares of the other two sides: ${cathetus1Square} and ${cathetus2Square}`);
  } else {
      alert('This triangle is not rectangular.');
  }  
} else {
  alert(' Incorrect data ');
}

// Task 7
const dateNow = new Date();
let hoursNow = dateNow.getHours();

if (hoursNow <= 5 || hoursNow >= 23) {
  alert(" Good night ");
} else if (hoursNow >= 5 && hoursNow <= 11) {
    alert(" Good morning ");
} else if  (hoursNow >= 11 && hoursNow <= 17) {
    alert(" Good day  ");
} else if (hoursNow >= 17 && hoursNow <= 23) {
    alert(" Good evening  ");
}

switch (true) {
  case (hoursNow <= 5 || hoursNow >= 23): 
    alert(" Good night ");
    break;
  case (hoursNow >= 5 && hoursNow <= 11):
    alert(" Good morning ");
    break;
  case (hoursNow >= 11 && hoursNow <= 17) :
    alert(" Good day  ");
    break;
  case (hoursNow >= 17 && hoursNow <= 23):
    alert(" Good evening  ");
    break;
}
