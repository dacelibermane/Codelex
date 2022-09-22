export {};

/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is:
 * c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_theorem
 *
 * You should be able to deduce which function arguments are which sides of a triangle
 * and name them in your function accordingly.
 */

//The Math.sqrt() function returns the square root of a number
//The Math.pow() static method, given two arguments, base and exponent, returns baseexponent.

const pythagoreanTheorem = (legA: number, legB: number): number => {
  let hypotenuse = Math.sqrt(Math.pow(legA, 2) + Math.pow(legB, 2));
  return hypotenuse;
};

console.log(pythagoreanTheorem(2, 4)); // Expected result: 4.47213595499958
console.log(pythagoreanTheorem(3, 4)); // Expected result: 5
