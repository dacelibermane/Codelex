import { getEffectiveTypeParameterDeclarations } from "typescript";

export {};

/** /
 * So far you've learned all about functions, arrays, objects and that's a lot already!
 * The rest of the exercises here are for you to practice some more before moving on to
 * the more complicated exercises in this course.
 */

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

// const fahrenheitToCelsius = (farenheitDegree: number): number => {
//   let celsius = (farenheitDegree - 32) / 1.8;
//   return Number(celsius.toFixed(1));
// };

//saīsinātais variants
const fahrenheitToCelsius = (farenheitDegree: number): number =>
  Number(((farenheitDegree - 32) / 1.8).toFixed(1));

// const celsiusToFahrenheit = (celsiusDegree: number): number => {
//   let farenheit = celsiusDegree * 1.8 + 32;
//   return Number(farenheit.toFixed(1));
// };

//saīsinātais varinats
const celsiusToFahrenheit = (celsiusDegree: number): number =>
  Number((celsiusDegree * 1.8 + 32).toFixed(1));

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(fahrenheitToCelsius(100)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
