export {};

// function greatest(x: number, y: number): number {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }

const greatest = (x: number, y: number): number => (x > y ? x : y);

const greatestNum = (...x: number[]): number => {
  let arrOfNum = [...x];
  let max = x[0];
  for (let i = 1; i < arrOfNum.length; i++) {
    if (arrOfNum[i] > max) {
      max = arrOfNum[i];
    }
  }
  return max;
};

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
console.log(greatestNum(5, 2, 7, -3, 9)); // Expected output: 9
console.log(greatestNum(5, 2, 100, 1000, -1)); // Expected output: 1000
