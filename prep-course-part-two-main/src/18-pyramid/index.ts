/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

import { symbolName } from "typescript";

// function pyramid(n: number) {
//   for (let i = 1; i <= n; i++) {
//     let str = " ";
//     let space = " ";
//     //creating spaces --> n-i 1)5-1 =4, 2)5-2 = 3
//     for (let j = 1; j < n - i; j++) {
//       space += " ";
//     }
//     //creating #
//     for (let j = 1; j <= i * 2 - 1; j++) {
//       str += "#";
//     }
//     // for (let j = 0; j < n - i; j++) {
//     //   str += "8";
//     // }
//     console.log(space + str + space);
//   }
// }

function pyramid(n: number) {
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - 1);
    let str = "#".repeat(i * 2 - 1);
    console.log(space + str + space);
  }
}

export { pyramid };
