export {};

// function getNumber(): number {
//   return Math.floor(Math.random() * 10);
// }

const getNumber = (): number => Math.floor(Math.random() * 10);

const result = getNumber(); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}
