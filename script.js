"use strict";

let myGrades = [100, 100, 90, 73, 78, 94, 86];
let myAverage = 0;
for (let i = 0; i <= myGrades.length - 1; i++) {
  myAverage += myGrades[i];
}
myAverage = myAverage / myGrades.length;
console.log("My grade average is " + myAverage);

//Part 2

class InputError extends Error {}

function myNumber(a) {
  let answer = a;

  if (isNaN(a) || a < 0 || a > 100) {
    throw new InputError("Invalid input error.");
  }

  return answer;
}

try {
  console.log(myNumber(101));
} catch (error) {
  if (error instanceof InputError) {
    console.log(error.message);
  } else {
    console.log("Generic error message.");
  }
}
