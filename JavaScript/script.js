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
  )} reminder `.concat(firstNumber % secondNumber)
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
