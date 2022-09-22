export {};

// function trimWord(word: string): string {
//   return word.trim();
// }
const trimWord = (word: string): string => word.trim();
const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"
