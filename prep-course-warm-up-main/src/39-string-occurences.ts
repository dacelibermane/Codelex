export {};

//A substring is a clearly defined sequence of consecutive characters in a string. For example, if we have the string "My name is John Doe", then "name is" is a substring, but "is name" is not because it is no longer a consecutive sequence (we've changed the order of words). Individual words such as "is" and "name" are always substrings.
//The split() is a JavaScript method for splitting strings into an array of substrings while preserving the original string.

/**Kā seperatoru izmantoju substr, lai sadal;itu teikumu vietās, kurās atrodas substr
 *[ '', ' quick brown fox jumps over ', ' lazy dog' ] un [ 'the quick brown ', ' jumps over the lazy dog' ]
 attiecīgi pirmajā varinatā tiek izveidots masīvs ar 3 stringiem, bet otrajā ar diviem. Tādēļ, lai uzzin;atu cik bieži vārds atkārtojas izmantoju length-1, lai 
 */

const count = (sentence: string, substr: string): number => {
  let sentenceToLowerCase = sentence.toLowerCase(); 
  console.log(sentenceToLowerCase.split(substr));
  return sentenceToLowerCase.split(substr).length - 1;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
