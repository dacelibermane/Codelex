export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */
/**map function-takes in array, and callback function,
//declare a new variable and assign it to an empty array,
//initiate a for loop that will iterate through the array and invoke the callback function with the values of array[i] being passed to it within the for loop
// push that evaluated result into the new array,
//return the new array, */
const map = (numbers: number[], callback: (number: number) => number) => {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(callback(numbers[i]));
  }
  return newArray;
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function (number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
