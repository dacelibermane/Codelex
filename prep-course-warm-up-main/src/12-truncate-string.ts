export {};

// let truncateString: string = "CODELEX";
// console.log(truncateString.slice(0, 4)); // Expected output: CODE

let str: string = "CODELEX";
const truncateString = (str: string, lenght: number) => str.slice(0, lenght);

///Kā šo uzrakstīt bez nevienas iebūvētas funkcijas -> uzrakstīt to pašu bez iebūvētām funkcij'm
/**const truncateString = (str: string, lenght: number): string => {
  let result = "";
  for (let i = 0; i < lenght; i++) {
    result += str[i];
  }
  return result;
};*/

console.log(truncateString(str, 4));
