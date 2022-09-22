export {};

function concatinateTwoWords(firstWord: string, secondWord: string): string {
  return firstWord.concat(" ", secondWord);
}

const result = concatinateTwoWords("Hello", "world"); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
