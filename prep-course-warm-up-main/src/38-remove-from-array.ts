export {};
// "lib": ["es6", "dom", "es2017"], pievienoju šo json failā, lai darbotos includes
// method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const removeFromArray = function (
  arr: number[],
  ...valuesToRemove: number[]
): number[] {
  const newArr = [...arr];
  return newArr.filter((el) => !valuesToRemove.includes(el));
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */
