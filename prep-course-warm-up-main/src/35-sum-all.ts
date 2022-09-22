export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function (startNum: number, endNum: number): number {
  let result = 0;

  for (let i = startNum; i <= endNum; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll(1, 4)); // Expected output: 10
