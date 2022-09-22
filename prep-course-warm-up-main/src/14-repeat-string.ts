export {};

// const repeatString = (char: string, lenght: number): string =>
//   char.repeat(lenght);

// const repeatString = (char: string, lenght: number): string => {
//   let result = "";
//   for (let i = 0; i < lenght; i++) {
//     result += char;
//   }
//   return result;
// };

const repeatString = (char: string, lenght: number): string => {
  let result = char;
  for (let i = 1; i < lenght; i++) {
    result += char;
  }
  return result;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
