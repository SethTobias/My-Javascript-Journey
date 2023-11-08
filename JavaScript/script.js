let language = "JavaScript";

let score = 10;

let length = 10,
  width = 5;

let areaRec = length * width;

console.log(`The area of the rectangle is `.concat(areaRec));

let firstNumber = 10,
  secondNumber = 4;
console.log(
  `${firstNumber} / ${secondNumber} = ${~~(
    firstNumber / secondNumber
  )} remainder ${firstNumber % secondNumber}`
);

let age = parseInt(19);
console.log(age);
console.log(typeof age);

let aDecimal = parseFloat(27.45);
console.log(aDecimal);
console.log(typeof aDecimal);

let firstName = "Seth";
console.log(firstName);
console.log(typeof firstName);

let arrayName = [1, 2, 3, 4, 5];
console.log(arrayName);
console.log(typeof arrayName);

let objectName = { myName: "Seth", myAge: 19, favColor: "Red" };
console.log(objectName);
console.log(typeof objectName);

let newArray = [1, 2, 3, 4, 5, "seth", "myself"];
// Will be typeof object
console.log(newArray);
let emptyVariable = null;
let undefinedVariable;

let moneyToConvert = 1000;
let dollar = 18.48;
let euro = 19.71;
let pound = 22.63;

console.log(`Dollar `.concat((moneyToConvert / dollar).toFixed(2)));
console.log(`Euro `.concat((moneyToConvert / euro).toFixed(2)));
console.log(`Pound `.concat((moneyToConvert / pound).toFixed(2)));

let enteredAmount = 400;
let vat = 0.15;
console.log(
  `The amount after tax is R`.concat(enteredAmount + enteredAmount * vat)
);

let firstNum = 8;
let secondNum = 20;
let thirdNum = 14;

if (firstNum >= secondNum && firstNum >= thirdNum) {
  console.log(firstNum);
} else if (secondNum >= firstNum && secondNum >= thirdNum) {
  console.log(secondNum);
} else {
  console.log(thirdNum);
}

if (firstNum % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

if (firstNum >= secondNum && firstNum >= thirdNum && secondNum >= thirdNum) {
  console.log(firstNum, secondNum, thirdNum);
} else if (
  firstNum >= secondNum &&
  firstNum >= thirdNum &&
  secondNum <= thirdNum
) {
  console.log(firstName, thirdNum, secondNum);
} else if (
  secondNum >= firstNum &&
  secondNum >= thirdNum &&
  firstNum >= thirdNum
) {
  console.log(secondNum, firstNum, thirdNum);
} else if (
  secondNum >= firstNum &&
  secondNum >= thirdNum &&
  firstNum <= thirdNum
) {
  console.log(secondNum, thirdNum, firstNum);
} else if (
  thirdNum >= firstNum &&
  thirdNum >= secondNum &&
  firstNum >= secondNum
) {
  console.log(thirdNum, firstNum, secondNum);
} else {
  console.log(thirdNum, secondNum, firstNum);
}
