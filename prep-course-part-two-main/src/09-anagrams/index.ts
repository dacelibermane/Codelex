/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
  const cleanSenA = stringA.replace(/[^a-zA-Z]\s*/g, "");
  const cleanSenB = stringB.replace(/[^a-zA-Z]\s*/g, "");

  const splitSenA = cleanSenA.split("").sort().join("").toLowerCase();
  const splitSenB = cleanSenB.split("").sort().join("").toLowerCase();

  // console.log(splitSenA);
  // console.log(splitSenB);
  return splitSenA === splitSenB ? true : false;
}

export { anagrams };
