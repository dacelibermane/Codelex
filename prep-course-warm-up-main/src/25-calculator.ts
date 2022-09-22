export {};

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

function sum(numArray: number[]): number {
  // let result = 0;
  // for (let i = 0; i < numArray.length; i++) {
  //   result += numArray[i];
  // }
  // return result;
  return numArray.reduce((sum, nextNum) => sum + nextNum);
}

function multiply(numArray: number[]): number {
  //sākotnējā vērtība ir 1, jo reizinot jebkuru skaitli ar 0 rezultātā iegūstam 0
  let result = 1;
  for (let i = 0; i < numArray.length; i++) {
    result *= numArray[i];
  }
  return result;
  // ______________________________________________________________________
  // let result = 1;
  // numArray.map(function (el) {
  //   result *= el;
  // });
  // return result;
  //________________________________________________________________________
  // return numArray.reduce((sum, nextNum) => sum * nextNum, 1);
}

//Exponentiation (**)
function power(num1: number, num2: number): number {
  return num1 ** num2;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
