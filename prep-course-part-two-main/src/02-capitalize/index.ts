/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

import { sortAndDeduplicateDiagnostics } from "typescript";

/**
function capitalize(str: string) {
  let arrayOfStr = str.split(" ");
  let result: string[] = [];

  arrayOfStr.forEach((word) => {
    const firstLetterCap = word[0].toUpperCase();
    console.log(firstLetterCap);
    const remainingLetters = word.substring(1);
    console.log(remainingLetters);
    result.push(firstLetterCap + remainingLetters);
  });
  return result.join(" ");
}

 */

function capitalize(str: string) {
  const splitStr = str.split(" ");
  let result: string[] = [];

  splitStr.forEach((word) => {
    result.push(word[0].toUpperCase() + word.slice(1));
  });
  return result.join(" ");
}

export { capitalize };
